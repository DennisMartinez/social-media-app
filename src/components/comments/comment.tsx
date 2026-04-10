import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { UserAvatar } from '../user-avatar'
import { type commentFragment$key } from './__generated__/commentFragment.graphql'

const CommentFragment = graphql`
  fragment commentFragment on Comment {
    id
    content
    createdAt
    user {
      name
      avatarUrl
      ...userAvatarFragment
    }
  }
`

interface CommentProps {
  comment: commentFragment$key
}

export function Comment({ comment }: CommentProps) {
  const data = useFragment(CommentFragment, comment)

  return (
    <div key={data.id} className="flex items-start gap-4">
      <div className="mt-1">
        <UserAvatar user={data.user} />
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <strong className="text-sm font-medium text-gray-900">
            {data.user.name}
          </strong>
          <small className="block text-xs text-gray-500">
            {new Date(data.createdAt).toLocaleString()}
          </small>
        </div>
        <div className="text-sm text-gray-900">{data.content}</div>
      </div>
    </div>
  )
}
