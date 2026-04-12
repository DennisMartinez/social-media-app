import { useCallback } from 'react'
import { useFragment, useMutation, type UseMutationConfig } from 'react-relay'
import { graphql } from 'relay-runtime'
import {
  type FollowUserInput,
  type useFollowsCreateMutation
} from './__generated__/useFollowsCreateMutation.graphql'
import {
  type UnfollowUserInput,
  type useFollowsDestroyMutation
} from './__generated__/useFollowsDestroyMutation.graphql'
import { type useFollowsFolloweeFragment$key } from './__generated__/useFollowsFolloweeFragment.graphql'
import { type useFollowsFollowerFragment$key } from './__generated__/useFollowsFollowerFragment.graphql'

const UseFollowsFollowerFragment = graphql`
  fragment useFollowsFollowerFragment on User {
    id
    followerCount
    followingCount
  }
`

const UseFollowsFolloweeFragment = graphql`
  fragment useFollowsFolloweeFragment on User {
    id
    followerCount
    followingCount
  }
`

interface UseFollowProps {
  follower: useFollowsFollowerFragment$key
  followee: useFollowsFolloweeFragment$key
}

export function useFollow({ follower, followee }: UseFollowProps) {
  const followerData = useFragment(UseFollowsFollowerFragment, follower)
  const followeeData = useFragment(UseFollowsFolloweeFragment, followee)
  const [follow, isFollowPending] = useMutation<useFollowsCreateMutation>(
    graphql`
      mutation useFollowsCreateMutation($input: FollowUserInput!) {
        followUser(input: $input) {
          errors
          follower {
            followerCount
            followingCount
          }
          followee {
            id
            viewerIsFollowing
            followerCount
            followingCount
          }
        }
      }
    `
  )

  const handleFollow = useCallback(
    (
      input: FollowUserInput,
      config?: Omit<
        UseMutationConfig<useFollowsCreateMutation>,
        'variables' | 'optimisticResponse'
      >
    ) => {
      return follow({
        ...config,
        variables: { input },
        optimisticResponse: {
          followUser: {
            errors: [],
            follower: {
              id: followerData.id,
              followerCount: followerData.followerCount,
              followingCount: followerData.followingCount + 1
            },
            followee: {
              id: followeeData.id,
              viewerIsFollowing: true,
              followerCount: followeeData.followerCount + 1,
              followingCount: followeeData.followingCount
            }
          }
        }
      })
    },
    [
      follow,
      followerData.id,
      followerData.followerCount,
      followerData.followingCount,
      followeeData.id,
      followeeData.followerCount,
      followeeData.followingCount
    ]
  )

  return [handleFollow, isFollowPending] as const
}

interface UseUnfollowProps {
  follower: useFollowsFollowerFragment$key
  followee: useFollowsFolloweeFragment$key
}

export function useUnfollow({ follower, followee }: UseUnfollowProps) {
  const followerData = useFragment(UseFollowsFollowerFragment, follower)
  const followeeData = useFragment(UseFollowsFolloweeFragment, followee)
  const [unfollow, isUnfollowPending] = useMutation<useFollowsDestroyMutation>(
    graphql`
      mutation useFollowsDestroyMutation($input: UnfollowUserInput!) {
        unfollowUser(input: $input) {
          errors
          follower {
            followerCount
            followingCount
          }
          followee {
            id
            viewerIsFollowing
            followerCount
            followingCount
          }
        }
      }
    `
  )

  const handleUnfollow = useCallback(
    (
      input: UnfollowUserInput,
      config?: Omit<
        UseMutationConfig<useFollowsDestroyMutation>,
        'variables' | 'optimisticResponse'
      >
    ) => {
      unfollow({
        ...config,
        variables: { input },
        optimisticResponse: {
          unfollowUser: {
            errors: [],
            follower: {
              id: followerData.id,
              followerCount: followerData.followerCount,
              followingCount: followerData.followingCount - 1
            },
            followee: {
              id: followeeData.id,
              viewerIsFollowing: false,
              followerCount: followeeData.followerCount - 1,
              followingCount: followeeData.followingCount
            }
          }
        }
      })
    },
    [
      unfollow,
      followerData.id,
      followerData.followerCount,
      followerData.followingCount,
      followeeData.id,
      followeeData.followerCount,
      followeeData.followingCount
    ]
  )

  return [handleUnfollow, isUnfollowPending] as const
}
