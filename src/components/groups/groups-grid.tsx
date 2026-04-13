import { LoaderCircleIcon } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { usePaginationFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type groupsGridFragment$key } from './__generated__/groupsGridFragment.graphql'
import { GroupCard } from './group-card'

const GroupsGridFragment = graphql`
  fragment groupsGridFragment on Query
  @refetchable(queryName: "groupsGridPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "String" }
    first: { type: "Int", defaultValue: 12 }
  ) {
    viewer {
      ...groupCardViewerFragment
    }
    groups(after: $cursor, first: $first)
      @connection(key: "GroupsGrid_groups") {
      edges {
        node {
          id
          ...groupCardFragment
        }
      }
    }
  }
`

interface GroupsGridProps {
  query: groupsGridFragment$key
}

export function GroupsGrid({ query }: GroupsGridProps) {
  const { data, hasNext, loadNext, isLoadingNext } = usePaginationFragment(
    GroupsGridFragment,
    query
  )

  const inifiniteScrollRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const ref = inifiniteScrollRef.current
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNext && !isLoadingNext) {
        loadNext(6)
      }
    })

    if (ref) observer.observe(ref)

    return () => {
      if (ref) observer.unobserve(ref)
    }
  }, [hasNext, isLoadingNext, loadNext])

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.groups?.edges?.map((edge) => {
          if (!edge?.node) return null

          return (
            <GroupCard
              key={edge.node.id}
              viewer={data.viewer}
              group={edge.node}
            />
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
