import { useCallback } from 'react'
import { useMutation, type UseMutationConfig } from 'react-relay'
import { graphql } from 'relay-runtime'
import {
  type FollowUserInput,
  type useFollowsCreateMutation
} from './__generated__/useFollowsCreateMutation.graphql'
import {
  type UnfollowUserInput,
  type useFollowsDestroyMutation
} from './__generated__/useFollowsDestroyMutation.graphql'

export function useFollow() {
  const [follow, isFollowPending] = useMutation<useFollowsCreateMutation>(
    graphql`
      mutation useFollowsCreateMutation($input: FollowUserInput!) {
        followUser(input: $input) {
          errors
          followedUser {
            id
            viewerIsFollowing
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
            followedUser: {
              id: input.userId,
              viewerIsFollowing: true
            }
          }
        }
      })
    },
    [follow]
  )

  return [handleFollow, isFollowPending] as const
}

export function useUnfollow() {
  const [unfollow, isUnfollowPending] = useMutation<useFollowsDestroyMutation>(
    graphql`
      mutation useFollowsDestroyMutation($input: UnfollowUserInput!) {
        unfollowUser(input: $input) {
          errors
          unfollowedUser {
            id
            viewerIsFollowing
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
            unfollowedUser: {
              id: input.userId,
              viewerIsFollowing: false
            }
          }
        }
      })
    },
    [unfollow]
  )

  return [handleUnfollow, isUnfollowPending] as const
}
