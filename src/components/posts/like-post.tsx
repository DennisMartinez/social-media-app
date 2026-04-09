import { useFragment, useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type likePostFragment$key } from './__generated__/likePostFragment.graphql'
import { type likePostMutation } from './__generated__/likePostMutation.graphql'

// TODO: Transform this to use likeable (Node) instead of post
const LikePostFragment = graphql`
  fragment likePostFragment on Post {
    id
    isLikedByCurrentUser
  }
`

const LikePostMutation = graphql`
  mutation likePostMutation($input: CreateLikeInput!) {
    createLike(input: $input) {
      errors
      likeEdge {
        node {
          id
          likeable {
            ... on Post {
              id
              isLikedByCurrentUser
            }
          }
        }
      }
    }
  }
`

interface LikePostProps {
  post: likePostFragment$key
}

export function LikePost({ post }: LikePostProps) {
  const data = useFragment(LikePostFragment, post)
  const [likePost, isLikingPost] =
    useMutation<likePostMutation>(LikePostMutation)

  return (
    <button
      disabled={isLikingPost || data.isLikedByCurrentUser}
      onClick={() => {
        likePost({
          variables: {
            input: {
              likeableId: data.id
            }
          },
          optimisticResponse: {
            createLike: {
              errors: [],
              likeEdge: {
                node: {
                  id: new Date().toISOString(),
                  likeable: {
                    __typename: 'Post',
                    id: data.id,
                    isLikedByCurrentUser: true
                  }
                }
              }
            }
          },
          onCompleted: (response) => {
            if (response.createLike?.errors.length) {
              alert(
                'Failed to like the post: ' +
                  response.createLike.errors.join(', ')
              )
            }

            // TODO: Show a toast
          }
        })
      }}>
      Like
    </button>
  )
}
