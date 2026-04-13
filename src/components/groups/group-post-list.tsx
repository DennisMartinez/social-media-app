import { LoaderCircleIcon } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { graphql, useFragment, usePaginationFragment } from 'react-relay'
import { Card, CardBody } from '../common/card'
import { Post } from '../posts/post'
import type { groupPostListFragment$key } from './__generated__/groupPostListFragment.graphql'
import type { groupPostListViewerFragment$key } from './__generated__/groupPostListViewerFragment.graphql'

const GroupPostListViewerFragment = graphql`
  fragment groupPostListViewerFragment on User {
    ...postViewerFragment
  }
`

const GroupPostListFragment = graphql`
  fragment groupPostListFragment on Group
  @refetchable(queryName: "groupPostListPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "String" }
    first: { type: "Int", defaultValue: 5 }
  ) {
    posts(after: $cursor, first: $first)
      @connection(key: "GroupPostList_posts") {
      edges {
        node {
          id
          ...postFragment
        }
      }
    }
  }
`

interface GroupPostListProps {
  viewer: groupPostListViewerFragment$key
  group: groupPostListFragment$key
}

export function GroupPostList({ viewer, group }: GroupPostListProps) {
  const viewerData = useFragment(GroupPostListViewerFragment, viewer)
  const { data, hasNext, loadNext, isLoadingNext } = usePaginationFragment(
    GroupPostListFragment,
    group
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
      <div className="flex w-full flex-col gap-4">
        {!data.posts?.edges?.length && (
          <Card>
            <CardBody className="wrap-break-word text-gray-900">
              No posts for this group.
            </CardBody>
          </Card>
        )}
        {data.posts?.edges?.map((edge) => {
          if (!edge?.node) return null
          return (
            <Post key={edge.node.id} viewer={viewerData} post={edge.node} />
          )
        })}
      </div>
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
