import { useLazyLoadQuery } from 'react-relay'
import { graphql } from 'relay-runtime'
import { FollowersCard } from '../components/follows/followers-card'
import { FollowingsCard } from '../components/follows/followings-card'
import { RecommendedFollows } from '../components/follows/recommended-follows'
import { Navigation } from '../components/navigation'
import { PostList } from '../components/posts/post-list'
import { type profileQuery } from './__generated__/profileQuery.graphql'

const ProfileQuery = graphql`
  query profileQuery {
    viewer {
      ...postListFragment
      ...postListViewerFragment
      ...createPostFormFragment
      ...recommendedFollowsFragment
      ...followersCardFragment
      ...followingsCardFragment
    }
    ...navigationFragment
  }
`

export function Component() {
  const data = useLazyLoadQuery<profileQuery>(ProfileQuery, {})

  return (
    <div className="p-8">
      <div className="mx-auto flex max-w-7xl grow flex-col gap-8 md:flex-row">
        <div className="flex w-full shrink-0 flex-col gap-4 md:w-72">
          <div className="top-8 xl:sticky">
            <Navigation query={data} />
          </div>
          <div className="flex shrink-0 flex-col gap-4 xl:hidden">
            <RecommendedFollows user={data.viewer} />
            <FollowersCard user={data.viewer} />
            <FollowingsCard user={data.viewer} />
          </div>
        </div>
        <div className="flex grow flex-col gap-4">
          <PostList viewer={data.viewer} user={data.viewer} />
        </div>
        <div className="hidden w-72 shrink-0 flex-col gap-4 xl:flex">
          <RecommendedFollows user={data.viewer} />
          <FollowersCard user={data.viewer} />
          <FollowingsCard user={data.viewer} />
        </div>
      </div>
    </div>
  )
}
