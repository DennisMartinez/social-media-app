import { useState } from 'react'
import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { CommentList } from '../comments/comment-list'
import { CreateCommentForm } from '../comments/create-comment-form'
import { UserAvatar } from '../user-avatar'
import { type postFragment$key } from './__generated__/postFragment.graphql'
import { type postViewerFragment$key } from './__generated__/postViewerFragment.graphql'
import { PostMenu } from './post-menu'
import { PostStats } from './post-stats'

const PostViewerFragment = graphql`
  fragment postViewerFragment on User {
    name
    ...userAvatarFragment
    ...createCommentFormViewerFragment
  }
`

const PostFragment = graphql`
  fragment postFragment on Post {
    id
    content
    createdAt
    user {
      name
      ...userAvatarFragment
    }
    ...destroyPostFragment
    ...createCommentFormCommentableFragment
    ...commentListFragment
    ...postStatsFragment
    # ...commentCountFragment
    # ...likeCountFragment
    ...postMenuFragment
  }
`

interface PostProps {
  viewer: postViewerFragment$key
  post: postFragment$key
}

export function Post({ viewer, post }: PostProps) {
  const data = useFragment(PostFragment, post)
  const viewerData = useFragment(PostViewerFragment, viewer)
  const [displayCommentForm, setDisplayCommentForm] = useState(false)

  return (
    <li className="flex flex-col gap-6 rounded-xl bg-white p-4">
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
          <PostMenu post={data} />
        </div>
      </div>
      <p className="text-gray-900">{data.content}</p>
      <PostStats
        post={data}
        onCommentsClick={() => setDisplayCommentForm(!displayCommentForm)}
      />
      <div className="flex flex-col gap-4">
        {displayCommentForm && (
          <CreateCommentForm viewer={viewerData} commentable={data} />
        )}
        <CommentList commentable={data} />
      </div>
    </li>
  )
}
