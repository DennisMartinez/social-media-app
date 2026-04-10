import { LoaderCircleIcon } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { useFragment, usePaginationFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type postListFragment$key } from './__generated__/postListFragment.graphql'
import { type postListViewerFragment$key } from './__generated__/postListViewerFragment.graphql'
import { Post } from './post'

const PostListViewerFragment = graphql`
  fragment postListViewerFragment on User {
    ...postViewerFragment
  }
`

const PostListFragment = graphql`
  fragment postListFragment on User
  @refetchable(queryName: "postListPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "String" }
    first: { type: "Int", defaultValue: 5 }
  ) {
    posts(after: $cursor, first: $first) @connection(key: "User_posts") {
      edges {
        node {
          id
          ...postFragment
        }
      }
    }
  }
`

interface PostListProps {
  viewer: postListViewerFragment$key
  user: postListFragment$key
}

export function PostList({ viewer, user }: PostListProps) {
  const viewerData = useFragment(PostListViewerFragment, viewer)
  const { data, hasNext, loadNext, isLoadingNext } = usePaginationFragment(
    PostListFragment,
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
    <div className="grid gap-4">
      <ol className="grid w-full gap-4">
        {data.posts?.edges?.map((edge) => {
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
