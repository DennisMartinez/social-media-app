import { useCallback } from 'react'
import {
  graphql,
  useFragment,
  useMutation,
  type UseMutationConfig
} from 'react-relay'
import { type useLikesFragment$key } from './__generated__/useLikesFragment.graphql'
import {
  type CreateLikeInput,
  type useLikesLikeMutation
} from './__generated__/useLikesLikeMutation.graphql'
import {
  type DestroyLikeInput,
  type useLikesUnlikeMutation
} from './__generated__/useLikesUnlikeMutation.graphql'

const UseLikesFragment = graphql`
  fragment useLikesFragment on Node {
    __typename
    id
    ... on Post {
      likesCount
      viewerHasLiked
    }
  }
`

export function useLike(like: useLikesFragment$key) {
  const data = useFragment(UseLikesFragment, like)
  const [createLike, isPendingLike] = useMutation<useLikesLikeMutation>(graphql`
    mutation useLikesLikeMutation($input: CreateLikeInput!) {
      createLike(input: $input) {
        errors
        likeEdge {
          node {
            id
            likeable {
              ...useLikesFragment
            }
          }
        }
      }
    }
  `)

  const handleLike = useCallback(
    (
      input: CreateLikeInput,
      config?: Omit<
        UseMutationConfig<useLikesLikeMutation>,
        'variables' | 'optimisticResponse'
      >
    ) => {
      createLike({
        ...config,
        variables: { input },
        optimisticResponse: {
          createLike: {
            errors: [],
            likeEdge: {
              node: {
                id: new Date().toISOString(),
                likeable: {
                  __typename: data.__typename,
                  id: data.id,
                  viewerHasLiked: true,
                  likesCount: (data.likesCount || 0) + 1
                }
              }
            }
          }
        }
      })
    },
    [createLike, data]
  )

  return [handleLike, isPendingLike] as const
}

export function useUnlike(like: useLikesFragment$key) {
  const data = useFragment(UseLikesFragment, like)
  const [destroyLike, isPendingUnlike] = useMutation<useLikesUnlikeMutation>(
    graphql`
      mutation useLikesUnlikeMutation($input: DestroyLikeInput!) {
        destroyLike(input: $input) {
          errors
          like {
            id @deleteRecord
            likeable {
              ...useLikesFragment
            }
          }
        }
      }
    `
  )

  const handleUnlike = useCallback(
    (
      input: DestroyLikeInput,
      config?: Omit<
        UseMutationConfig<useLikesUnlikeMutation>,
        'variables' | 'optimisticResponse'
      >
    ) => {
      destroyLike({
        ...config,
        variables: { input },
        optimisticResponse: {
          destroyLike: {
            errors: [],
            like: {
              id: new Date().toISOString(),
              likeable: {
                __typename: data.__typename,
                id: data.id,
                viewerHasLiked: false,
                likesCount: (data.likesCount || 1) - 1
              }
            }
          }
        }
      })
    },
    [destroyLike, data]
  )

  return [handleUnlike, isPendingUnlike] as const
}
