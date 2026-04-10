import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'
import { FollowersCard } from '../components/follows/followers-card'
import { FollowingsCard } from '../components/follows/followings-card'
import { RecommendedFollows } from '../components/follows/recommended-follows'
import { Navigation } from '../components/navigation'
import { CreatePostForm } from '../components/posts/create-post-form'
import { FeedList } from '../components/posts/feed-list'
import { type feedQuery } from './__generated__/feedQuery.graphql'

const FeedQuery = graphql`
  query feedQuery {
    viewer {
      ...feedListFragment
      ...feedListViewerFragment
      ...createPostFormFragment
      ...recommendedFollowsFragment
      ...followersCardFragment
      ...followingsCardFragment
    }
    ...navigationFragment
  }
`

export function Component() {
  const data = useLazyLoadQuery<feedQuery>(FeedQuery, {})

  return (
    <div className="p-8">
      <div className="mx-auto flex max-w-7xl grow gap-8">
        <div className="w-72 shrink-0">
          <div className="sticky top-8">
            <Navigation query={data} />
          </div>
        </div>
        <div className="grid w-full grow gap-4">
          <CreatePostForm user={data.viewer} />
          <FeedList viewer={data.viewer} user={data.viewer} />
        </div>
        <div className="flex w-72 shrink-0 flex-col gap-4">
          <RecommendedFollows user={data.viewer} />
          <FollowersCard user={data.viewer} />
          <FollowingsCard user={data.viewer} />
        </div>
      </div>
    </div>
  )
}
