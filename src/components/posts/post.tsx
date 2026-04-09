import { EllipsisIcon, MessageCircleIcon, ThumbsUp } from 'lucide-react'
import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { CommentList } from '../comments/comment-list'
import { CreateCommentForm } from '../comments/create-comment-form'
import { UserAvatar } from '../user-avatar'
import type { postFragment$key } from './__generated__/postFragment.graphql'

const PostFragment = graphql`
  fragment postFragment on Post {
    id
    content
    createdAt
    isLikedByCurrentUser
    user {
      name
      ...userAvatarFragment
      ...createCommentFormUserFragment
    }
    ...likePostFragment
    ...unlikePostFragment
    ...destroyPostFragment
    ...createCommentFormCommentableFragment
    ...commentListFragment
  }
`

interface PostProps {
  post: postFragment$key
}

export function Post({ post }: PostProps) {
  const data = useFragment(PostFragment, post)

  return (
    <li className="rounded-xl bg-white p-4">
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

      <p className="p-4 text-gray-900">{data.content}</p>

      <div className="flex items-center justify-between border-t border-b border-gray-200 py-4">
        {/* <small className="text-sm text-gray-500">
          Created at: {new Date(data.createdAt).toLocaleString()}
        </small> */}
        <div className="space-between flex gap-12">
          <div className="flex items-center gap-1 text-sm">
            <ThumbsUp className="size-4" /> 25 likes
          </div>
          <div className="flex items-center gap-1 text-sm">
            <MessageCircleIcon className="size-4" /> 10 comments
          </div>
        </div>
      </div>

      <CreateCommentForm user={data.user} commentable={data} />
      <CommentList commentable={data} />

      {/* <div className="flex items-start justify-between">
        <div>
          <p>{data.content}</p>
          <small>Created at: {data.createdAt}</small>
        </div>
        {data.isLikedByCurrentUser ? (
          <UnlikePost post={data} />
        ) : (
          <LikePost post={data} />
        )}

        <DestroyFeedItem post={data} />
      </div> */}
      <div>
        {/* <CreateCommentForm commentable={data} /> */}
        {/* <CommentList commentable={data} /> */}
        {/* <PostCommentList commentable={data} /> */}
      </div>
    </li>
  )
}
