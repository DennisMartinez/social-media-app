import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type feedFragment$key } from './__generated__/feedFragment.graphql'
import { CreatePostForm } from './posts/create-post-form'
import { FeedList } from './posts/feed-list'

const FeedFragment = graphql`
  fragment feedFragment on User {
    ...feedListFragment
    ...createPostFormFragment
  }
`

interface FeedProps {
  user: feedFragment$key
}

export function Feed({ user }: FeedProps) {
  const data = useFragment(FeedFragment, user)

  return (
    <div className="grid w-full gap-4">
      <CreatePostForm user={data} />
      <FeedList user={data} />
    </div>
  )
}
