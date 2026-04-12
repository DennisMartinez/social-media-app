import { useLazyLoadQuery } from 'react-relay'
import { useParams } from 'react-router'
import { graphql } from 'relay-runtime'
import { FollowersCard } from '../components/follows/followers-card'
import { FollowingsCard } from '../components/follows/followings-card'
import { Navigation } from '../components/navigation/navigation'
import { PostList } from '../components/posts/post-list'
import { ProfileHeader } from '../components/profiles/profile-header'
import { type userQuery } from './__generated__/userQuery.graphql'

const UserQuery = graphql`
  query userQuery($id: ID!) {
    viewer {
      ...postListViewerFragment
      ...profileHeaderViewerFragment
      ...followersCardViewerFragment
      ...followingsCardViewerFragment
    }
    node(id: $id) {
      ... on User {
        ...profileHeaderFragment
        ...postListFragment
        ...followersCardFragment
        ...followingsCardFragment
      }
    }
    ...navigationFragment
  }
`

export function Component() {
  const params = useParams()
  const data = useLazyLoadQuery<userQuery>(UserQuery, { id: String(params.id) })

  if (!data.node) {
    return <div>User not found</div>
  }

  return (
    <div className="p-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 md:flex-row">
        <div className="flex w-full shrink-0 flex-col gap-4 md:w-72">
          <div className="top-8 xl:sticky">
            <Navigation query={data} />
          </div>
          <div className="flex shrink-0 flex-col gap-4 xl:hidden">
            <FollowersCard viewer={data.viewer} user={data.node} />
            <FollowingsCard viewer={data.viewer} user={data.node} />
          </div>
        </div>
        <div className="flex w-full min-w-0 flex-col gap-8">
          <ProfileHeader viewer={data.viewer} user={data.node} />
          <div className="flex w-full flex-col gap-8 md:flex-row">
            <div className="flex w-full min-w-0 flex-col gap-4">
              <PostList viewer={data.viewer} user={data.node} />
            </div>
            <div className="hidden w-72 shrink-0 flex-col gap-4 xl:flex">
              <FollowersCard viewer={data.viewer} user={data.node} />
              <FollowingsCard viewer={data.viewer} user={data.node} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
