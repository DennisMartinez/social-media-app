import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { CommentList } from '../comments/comment-list'
import { CreateCommentForm } from '../comments/create-comment-form'
import { type postListItemFragment$key } from './__generated__/postListItemFragment.graphql'
import { DestroyFeedItem } from './destroy-post'
import { LikePost } from './like-post'
import { UnlikePost } from './unlike-post'

const PostListItemFragment = graphql`
  fragment postListItemFragment on Post {
    id
    content
    createdAt
    isLikedByCurrentUser
    ...likePostFragment
    ...unlikePostFragment
    ...destroyPostFragment
    ...createCommentFormFragment
    ...commentListFragment
  }
`

interface PostListItemProps {
  post: postListItemFragment$key
}

export function PostListItem({ post }: PostListItemProps) {
  const data = useFragment(PostListItemFragment, post)

  return (
    <li className="rounded-lg bg-gray-50 p-4 shadow-sm">
      <div className="flex items-start justify-between">
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
      </div>

      <div>
        <CreateCommentForm commentable={data} />
        <CommentList commentable={data} />
        {/* <PostCommentList commentable={data} /> */}
      </div>
    </li>
  )
}
