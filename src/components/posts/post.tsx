import { EllipsisIcon } from 'lucide-react'
import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { CommentCount } from '../comments/comment-count'
import { CommentList } from '../comments/comment-list'
import { CreateCommentForm } from '../comments/create-comment-form'
import { LikeCount } from '../likes/like-count'
import { UserAvatar } from '../user-avatar'
import { type postFragment$key } from './__generated__/postFragment.graphql'

const PostFragment = graphql`
  fragment postFragment on Post {
    id
    content
    createdAt
    user {
      name
      ...userAvatarFragment
      ...createCommentFormUserFragment
    }
    ...destroyPostFragment
    ...createCommentFormCommentableFragment
    ...commentListFragment
    ...commentCountFragment
    ...likeCountFragment
  }
`

interface PostProps {
  post: postFragment$key
}

export function Post({ post }: PostProps) {
  const data = useFragment(PostFragment, post)

  return (
    <li className="grid gap-6 rounded-xl bg-white p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <UserAvatar user={data.user} />
          <div>
            <strong className="block text-base font-medium text-gray-900">
              {data.user.name}
            </strong>
            <small className="block text-sm text-gray-500">
              {new Date(data.createdAt).toLocaleString()}
            </small>
          </div>
        </div>
        <div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100">
            <EllipsisIcon className="size-6" />
          </button>
        </div>
      </div>
      <p className="text-gray-900">{data.content}</p>
      <div className="flex items-center justify-between border-t border-b border-gray-200 py-4">
        <div className="space-between flex gap-12">
          <LikeCount likeable={data} />
          <CommentCount commentable={data} />
        </div>
      </div>
      <div className="grid gap-4">
        <CreateCommentForm user={data.user} commentable={data} />
        <CommentList commentable={data} />
      </div>
    </li>
  )
}
