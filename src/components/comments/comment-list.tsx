import { usePaginationFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type commentListFragment$key } from './__generated__/commentListFragment.graphql'

const CommentListFragment = graphql`
  fragment commentListFragment on Node
  @refetchable(queryName: "postCommentListPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "String" }
    first: { type: "Int", defaultValue: 5 }
  ) {
    ... on Post {
      comments(after: $cursor, first: $first)
        @connection(key: "Post_comments") {
        edges {
          node {
            id
            content
          }
        }
      }
    }
  }
`

interface CommentListProps {
  commentable: commentListFragment$key
}

export function CommentList({ commentable }: CommentListProps) {
  const { data, hasNext, loadNext, isLoadingNext } = usePaginationFragment(
    CommentListFragment,
    commentable
  )

  return (
    <div>
      <ol className="grid w-full gap-4">
        {data.comments?.edges?.map((edge) => {
          if (!edge?.node) return null

          return (
            <div key={edge.node.id}>
              {edge.node.id} - {edge.node.content}
            </div>
          )
        })}
      </ol>
      {isLoadingNext && <p>Loading...</p>}
      {hasNext && <button onClick={() => loadNext(5)}>Load more</button>}
    </div>
  )
}
