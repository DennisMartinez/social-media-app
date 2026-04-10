import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'
import { FollowersCard } from '../components/follows/followers-card'
import { FollowingsCard } from '../components/follows/followings-card'
import { RecommendedFollows } from '../components/follows/recommended-follows'
import { Navigation } from '../components/navigation'
import { CreatePostForm } from '../components/posts/create-post-form'
import { FeedList } from '../components/posts/feed-list'
import { type dashboardQuery } from './__generated__/dashboardQuery.graphql'

const DashboardQuery = graphql`
  query dashboardQuery {
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
  const data = useLazyLoadQuery<dashboardQuery>(DashboardQuery, {})

  return (
    <div className="flex w-full">
      <div className="w-72">
        <Navigation query={data} />
      </div>
      <div className="mx-auto flex max-w-5xl grow gap-8 p-8">
        <div className="grid w-full grow gap-4">
          <CreatePostForm user={data.viewer} />
          <FeedList viewer={data.viewer} user={data.viewer} />
        </div>
        <div className="flex w-72 flex-col gap-8">
          <RecommendedFollows user={data.viewer} />
          <FollowersCard user={data.viewer} />
          <FollowingsCard user={data.viewer} />
        </div>
      </div>
    </div>
  )
}
