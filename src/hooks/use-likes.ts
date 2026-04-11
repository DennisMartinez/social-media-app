import { useCallback } from 'react'
import {
  graphql,
  useFragment,
  useMutation,
  type UseMutationConfig
} from 'react-relay'
import { type useLikesLikeableFragment$key } from './__generated__/useLikesLikeableFragment.graphql'
import {
  type CreateLikeInput,
  type useLikesLikeMutation
} from './__generated__/useLikesLikeMutation.graphql'
import {
  type DestroyLikeInput,
  type useLikesUnlikeMutation
} from './__generated__/useLikesUnlikeMutation.graphql'

const UseLikesLikeableFragment = graphql`
  fragment useLikesLikeableFragment on Node {
    __typename
    id
    ... on Post {
      likesCount
      viewerHasLiked
      viewerLike {
        id
      }
    }
  }
`

export function useLike(likeable: useLikesLikeableFragment$key) {
  const data = useFragment(UseLikesLikeableFragment, likeable)
  const [createLike, isPendingLike] = useMutation<useLikesLikeMutation>(graphql`
    mutation useLikesLikeMutation($input: CreateLikeInput!) {
      createLike(input: $input) {
        errors
        likeEdge {
          node {
            id
            likeable {
              ...useLikesLikeableFragment
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
        optimisticUpdater: (store) => {
          const likeableRecord = store.get(data.id)

          if (!likeableRecord) return

          const currentLikesCount = likeableRecord.getValue('likesCount') as
            | number
            | undefined
          likeableRecord.setValue((currentLikesCount || 0) + 1, 'likesCount')
          likeableRecord.setValue(true, 'viewerHasLiked')
        }
      })
    },
    [createLike, data]
  )

  return [handleLike, isPendingLike] as const
}

export function useUnlike(likeable: useLikesLikeableFragment$key) {
  const data = useFragment(UseLikesLikeableFragment, likeable)
  const [destroyLike, isPendingUnlike] = useMutation<useLikesUnlikeMutation>(
    graphql`
      mutation useLikesUnlikeMutation($input: DestroyLikeInput!) {
        destroyLike(input: $input) {
          errors
          like {
            id @deleteRecord
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
              id: data.viewerLike?.id
            }
          }
        },
        optimisticUpdater: (store) => {
          const likeableRecord = store.get(data.id)
          if (likeableRecord) {
            const currentLikesCount = likeableRecord.getValue('likesCount') as
              | number
              | undefined
            likeableRecord.setValue((currentLikesCount || 1) - 1, 'likesCount')
            likeableRecord.setValue(false, 'viewerHasLiked')
          }
        }
      })
    },
    [destroyLike, data]
  )

  return [handleUnlike, isPendingUnlike] as const
}
