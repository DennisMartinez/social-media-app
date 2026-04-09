import { ThumbsUpIcon } from 'lucide-react'
import { useFragment, useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'
import type { likeCountFragment$key } from './__generated__/likeCountFragment.graphql'
import type { likeCountMutation } from './__generated__/likeCountMutation.graphql'

const LikeCountFragment = graphql`
  fragment likeCountFragment on Node {
    __typename
    id
    ... on Post {
      likesCount
    }
  }
`

const LikeCountMutation = graphql`
  mutation likeCountMutation($input: CreateLikeInput!) {
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

interface LikeCountProps {
  likeable: likeCountFragment$key
}

export function LikeCount({ likeable }: LikeCountProps) {
  const data = useFragment(LikeCountFragment, likeable)
  const [createLike] = useMutation<likeCountMutation>(LikeCountMutation)

  return (
    <div
      className="flex items-center gap-1 text-sm"
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
      <ThumbsUpIcon className="size-4" />
      <div>{data.likesCount} likes</div>
    </div>
  )
}
