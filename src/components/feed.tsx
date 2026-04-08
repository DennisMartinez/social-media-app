import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type feedFragment$key } from './__generated__/feedFragment.graphql'
import { NewPostForm } from './posts/new-post-form'
import { PostList } from './posts/post-list'

const FeedFragment = graphql`
  fragment feedFragment on Query {
    currentUser {
      ...postListFragment
      ...newPostFormFragment
    }
  }
`

interface FeedProps {
  query: feedFragment$key
}

export function Feed({ query }: FeedProps) {
  const data = useFragment(FeedFragment, query)

  return (
    <div className="grid w-full gap-4">
      <NewPostForm user={data.currentUser} />
      <PostList user={data.currentUser} />
    </div>
  )
}
