import { useState } from 'react'
import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { CommentList } from '../comments/comment-list'
import { CreateCommentForm } from '../comments/create-comment-form'
import { Card, CardBody, CardFooter, CardHeader } from '../common/card'
import { type postFragment$key } from './__generated__/postFragment.graphql'
import { type postViewerFragment$key } from './__generated__/postViewerFragment.graphql'
import { PostContent } from './post-content'
import { PostMenu } from './post-menu'
import { PostStats } from './post-stats'
import { PostUser } from './post-user'

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
    ...postUserFragment
    ...postContentFragment
    ...createCommentFormCommentableFragment
    ...commentListFragment
    ...postStatsFragment
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
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <PostUser user={data} />
          <PostMenu post={data} />
        </div>
      </CardHeader>
      <CardBody>
        <PostContent post={data} />
      </CardBody>
      <CardBody>
        <PostStats
          post={data}
          onCommentsClick={() => setDisplayCommentForm(!displayCommentForm)}
        />
      </CardBody>
      <CardFooter>
        <div className="flex flex-col gap-4">
          {displayCommentForm && (
            <CreateCommentForm viewer={viewerData} commentable={data} />
          )}
          <CommentList commentable={data} />
        </div>
      </CardFooter>
    </Card>
  )
}
