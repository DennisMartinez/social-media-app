import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type feedFragment$key } from './__generated__/feedFragment.graphql'
import { FeedList } from './posts/feed-list'
import { NewPostForm } from './posts/new-post-form'

const FeedFragment = graphql`
  fragment feedFragment on User {
    ...feedListFragment
    ...newPostFormFragment
  }
`

interface FeedProps {
  user: feedFragment$key
}

export function Feed({ user }: FeedProps) {
  const data = useFragment(FeedFragment, user)

  return (
    <div className="grid w-full gap-4">
      <NewPostForm user={data} />
      <FeedList user={data} />
    </div>
  )
}
