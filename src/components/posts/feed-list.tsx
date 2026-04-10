import { LoaderCircleIcon } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { useFragment, usePaginationFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type feedListFragment$key } from './__generated__/feedListFragment.graphql'
import { type feedListViewerFragment$key } from './__generated__/feedListViewerFragment.graphql'
import { Post } from './post'

const FeedListViewerFragment = graphql`
  fragment feedListViewerFragment on User {
    ...postViewerFragment
  }
`

const FeedListFragment = graphql`
  fragment feedListFragment on User
  @refetchable(queryName: "feedListPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "String" }
    first: { type: "Int", defaultValue: 5 }
  ) {
    feed(after: $cursor, first: $first) @connection(key: "User_feed") {
      edges {
        node {
          id
          ...postFragment
        }
      }
    }
  }
`

interface FeedListProps {
  viewer: feedListViewerFragment$key
  user: feedListFragment$key
}

export function FeedList({ viewer, user }: FeedListProps) {
  const viewerData = useFragment(FeedListViewerFragment, viewer)
  const { data, hasNext, loadNext, isLoadingNext } = usePaginationFragment(
    FeedListFragment,
    user
  )

  const inifiniteScrollRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const ref = inifiniteScrollRef.current
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNext && !isLoadingNext) {
        loadNext(5)
      }
    })

    if (ref) observer.observe(ref)

    return () => {
      if (ref) observer.unobserve(ref)
    }
  }, [hasNext, isLoadingNext, loadNext])

  return (
    <div className="flex flex-col gap-4">
      <ol className="flex w-full flex-col gap-4">
        {data.feed?.edges?.map((edge) => {
          if (!edge?.node) return null
          return (
            <Post key={edge.node.id} viewer={viewerData} post={edge.node} />
          )
        })}
      </ol>
      {isLoadingNext && (
        <div role="alert" className="flex justify-center text-blue-500">
          <LoaderCircleIcon className="size-6 animate-spin" />
          <span className="sr-only">Loading more posts...</span>
        </div>
      )}
      {hasNext && <div ref={inifiniteScrollRef} />}
    </div>
  )
}
