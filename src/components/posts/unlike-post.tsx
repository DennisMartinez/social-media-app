import { useFragment, useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'
import type { unlikePostFragment$key } from './__generated__/unlikePostFragment.graphql'
import type { unlikePostMutation } from './__generated__/unlikePostMutation.graphql'

const UnlikePostFragment = graphql`
  fragment unlikePostFragment on Post {
    id
    isLikedByCurrentUser
  }
`

const UnlikePostMutation = graphql`
  mutation unlikePostMutation($input: DestroyLikeInput!) {
    destroyLike(input: $input) {
      errors
      like {
        id @deleteRecord
        likeable {
          ... on Post {
            id
            isLikedByCurrentUser
          }
        }
      }
    }
  }
`

interface UnlikePostProps {
  post: unlikePostFragment$key
}

export function UnlikePost({ post }: UnlikePostProps) {
  const data = useFragment(UnlikePostFragment, post)
  const [unlikePost, isUnlikingPost] =
    useMutation<unlikePostMutation>(UnlikePostMutation)

  return (
    <button
      disabled={isUnlikingPost || !data.isLikedByCurrentUser}
      onClick={() => {
        unlikePost({
          variables: {
            input: {
              likeableId: data.id
            }
          },
          optimisticResponse: {
            destroyLike: {
              errors: [],
              like: {
                id: new Date().toISOString(),
                likeable: {
                  __typename: 'Post',
                  id: data.id,
                  isLikedByCurrentUser: false
                }
              }
            }
          },
          onCompleted: (response) => {
            if (response.destroyLike?.errors.length) {
              alert(
                'Failed to unlike the post: ' +
                  response.destroyLike.errors.join(', ')
              )
            }

            // TODO: Show a toast
          }
        })
      }}>
      Unlike
    </button>
  )
}
