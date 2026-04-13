import { useLazyLoadQuery } from 'react-relay'
import { useParams } from 'react-router'
import { graphql } from 'relay-runtime'
import { DemoAlert } from '../components/demo/demo-alert'
import { FollowersCard } from '../components/follows/followers-card'
import { FollowingsCard } from '../components/follows/followings-card'
import { GroupMembersCard } from '../components/groups/group-members-card'
import { GroupPostList } from '../components/groups/group-post-list'
import { Navigation } from '../components/navigation/navigation'
import { CreatePostForm } from '../components/posts/create-post-form'
import { ProfileHeader } from '../components/profiles/profile-header'
import { UserPostList } from '../components/users/user-post-list'
import { type nodeQuery } from './__generated__/nodeQuery.graphql'
import { Component as NotFound } from './not-found'

const NodeQuery = graphql`
  query nodeQuery($id: ID!) {
    viewer {
      ...createPostFormFragment
      ...groupPostListViewerFragment
      ...groupMembersCardViewerFragment
      ...userPostListViewerFragment
      ...profileHeaderViewerFragment
      ...followersCardViewerFragment
      ...followingsCardViewerFragment
    }
    node(id: $id) {
      __typename
      id
      ...profileHeaderFragment
      ... on User {
        ...userPostListFragment
        ...followersCardFragment
        ...followingsCardFragment
      }
      ... on Group {
        viewerIsMember
        ...groupPostListFragment
        ...groupMembersCardFragment
        ...createPostFormGroupFragment
      }
    }
    ...navigationFragment
  }
`

export function Component() {
  const params = useParams()
  const data = useLazyLoadQuery<nodeQuery>(
    NodeQuery,
    { id: String(params.id) },
    { fetchPolicy: 'store-and-network' }
  )
  const isUser = data.node?.__typename === 'User'
  const isGroup = data.node?.__typename === 'Group'

  if (!data.node) {
    return <NotFound />
  }

  return (
    <div className="p-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 md:flex-row">
        <div className="flex w-full shrink-0 flex-col gap-4 md:w-72">
          <div className="top-8 flex flex-col gap-4 xl:sticky">
            <Navigation query={data} />
            <DemoAlert />
          </div>
          <div className="flex shrink-0 flex-col gap-4 xl:hidden">
            {isUser && (
              <>
                <FollowersCard viewer={data.viewer} user={data.node} />
                <FollowingsCard viewer={data.viewer} user={data.node} />
              </>
            )}
            {isGroup && <div>Member list</div>}
          </div>
        </div>
        <div className="flex w-full min-w-0 flex-col gap-8">
          {(isUser || isGroup) && (
            <ProfileHeader viewer={data.viewer} node={data.node} />
          )}
          <div className="flex w-full flex-col gap-8 md:flex-row">
            <div className="flex w-full min-w-0 flex-col gap-4">
              {isUser && <UserPostList viewer={data.viewer} user={data.node} />}
              {isGroup && (
                <>
                  {data.node.viewerIsMember && (
                    <CreatePostForm user={data.viewer} group={data.node} />
                  )}
                  <GroupPostList viewer={data.viewer} group={data.node} />
                </>
              )}
            </div>
            <div className="hidden w-72 shrink-0 flex-col gap-4 xl:flex">
              {isUser && (
                <>
                  <FollowersCard viewer={data.viewer} user={data.node} />
                  <FollowingsCard viewer={data.viewer} user={data.node} />
                </>
              )}
              {isGroup && (
                <GroupMembersCard viewer={data.viewer} user={data.node} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
