import { usePaginationFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { Button } from '../common/button'
import { type commentListFragment$key } from './__generated__/commentListFragment.graphql'
import { Comment } from './comment'

const CommentListFragment = graphql`
  fragment commentListFragment on Node
  @refetchable(queryName: "postCommentListPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "String" }
    first: { type: "Int", defaultValue: 1 }
  ) {
    ... on Post {
      comments(after: $cursor, first: $first)
        @connection(key: "Post_comments") {
        edges {
          node {
            id
            ...commentFragment
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
    <div className="flex flex-col gap-4">
      <div className="flex w-full flex-col gap-4">
        {!data.comments?.edges?.length && (
          <div className="text-xs font-semibold text-gray-500">
            No comments yet. Be the first to comment!
          </div>
        )}
        {data.comments?.edges?.map((edge) => {
          if (!edge?.node) return null
          return <Comment key={edge.node.id} comment={edge.node} />
        })}
      </div>
      {hasNext && (
        <div>
          <Button
            variant="ghost"
            size="xs"
            loading={isLoadingNext}
            onClick={() => loadNext(5)}>
            View More Comments
          </Button>
        </div>
      )}
    </div>
  )
}
