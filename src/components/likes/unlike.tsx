import { ThumbsUpIcon } from 'lucide-react'
import { useFragment, useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'
import { cn } from '../../utils'
import { type likeFragment$key } from './__generated__/likeFragment.graphql'
import { type unlikeMutation } from './__generated__/unlikeMutation.graphql'

const UnlikeFragment = graphql`
  fragment unlikeFragment on Node {
    __typename
    id
    ... on Post {
      likesCount
      currentUserLike {
        id
      }
    }
  }
`

const UnlikeMutation = graphql`
  mutation unlikeMutation($input: DestroyLikeInput!) {
    destroyLike(input: $input) {
      errors
      like {
        id @deleteRecord
        likeable {
          ...unlikeFragment
        }
      }
    }
  }
`

interface UnlikeProps {
  likeable: likeFragment$key
}

export function Unlike({ likeable }: UnlikeProps) {
  const data = useFragment(UnlikeFragment, likeable)
  const [destroyLike] = useMutation<unlikeMutation>(UnlikeMutation)

  return (
    <button
      aria-label="Unlike"
      disabled={!data.currentUserLike?.id}
      className={cn('flex', {
        'text-blue-500': data.currentUserLike?.id
      })}
      onClick={() => {
        destroyLike({
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
                  __typename: data.__typename,
                  id: data.id,
                  currentUserLike: {
                    id: data.currentUserLike?.id
                  },
                  likesCount: (data.likesCount || 1) - 1
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
      <ThumbsUpIcon className="size-4" />
    </button>
  )
}
