import { useFragment } from 'react-relay'
import { Link } from 'react-router'
import { graphql } from 'relay-runtime'
import { UserAvatar } from '../user-avatar'
import { type commentFragment$key } from './__generated__/commentFragment.graphql'
import { CommentContent } from './comment-content'

const CommentFragment = graphql`
  fragment commentFragment on Comment {
    id
    createdAt
    user {
      id
      name
      avatarUrl
      ...userAvatarFragment
    }
    ...commentContentFragment
  }
`

interface CommentProps {
  comment: commentFragment$key
}

export function Comment({ comment }: CommentProps) {
  const data = useFragment(CommentFragment, comment)

  return (
    <div className="flex items-start gap-4">
      <Link to={`/users/${data.user.id}`} className="mt-2">
        <UserAvatar user={data.user} size="sm" />
      </Link>
      <div className="flex min-w-0 flex-col gap-2">
        <div>
          <Link
            to={`/users/${data.user.id}`}
            className="text-sm font-medium text-gray-900">
            {data.user.name}
          </Link>
          <small className="block text-xs text-gray-500">
            {new Date(data.createdAt).toLocaleString()}
          </small>
        </div>
        <CommentContent comment={data} />
      </div>
    </div>
  )
}
