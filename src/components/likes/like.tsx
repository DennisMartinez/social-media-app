import { ThumbsUpIcon } from 'lucide-react'
import { useFragment, useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type likeFragment$key } from './__generated__/likeFragment.graphql'
import { type likeMutation } from './__generated__/likeMutation.graphql'

const LikeFragment = graphql`
  fragment likeFragment on Node {
    __typename
    id
    ... on Post {
      likesCount
      currentUserLike {
        id
      }
      # ...likeCountFragment
    }
  }
`

const LikeMutation = graphql`
  mutation likeMutation($input: CreateLikeInput!) {
    createLike(input: $input) {
      errors
      likeEdge {
        node {
          id
          likeable {
            ... on Post {
              id
              likesCount
              currentUserLike {
                id
              }
            }
          }
        }
      }
    }
  }
`

interface LikeProps {
  likeable: likeFragment$key
}

export function Like({ likeable }: LikeProps) {
  const data = useFragment(LikeFragment, likeable)
  const [createLike] = useMutation<likeMutation>(LikeMutation)

  return (
    <button
      aria-label="Like"
      disabled={!!data.currentUserLike?.id}
      className="flex"
      onClick={() => {
        createLike({
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
                    __typename: data.__typename,
                    id: data.id,
                    currentUserLike: {
                      id: new Date().toISOString()
                    },
                    likesCount: (data.likesCount || 0) + 1
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
      <ThumbsUpIcon className="size-4" />
    </button>
  )
}
