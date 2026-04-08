import { useFragment, useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type destroyPostFragment$key } from './__generated__/destroyPostFragment.graphql'
import { type destroyPostMutation } from './__generated__/destroyPostMutation.graphql'

const DestroyPostFragment = graphql`
  fragment destroyPostFragment on Post {
    id
    canDestroy
  }
`

const DestroyPostMutation = graphql`
  mutation destroyPostMutation($postId: ID!) {
    destroyPost(input: { postId: $postId }) {
      post {
        id @deleteRecord
      }
    }
  }
`

interface DestroyFeedItemProps {
  post: destroyPostFragment$key
}

export function DestroyFeedItem({ post }: DestroyFeedItemProps) {
  const data = useFragment(DestroyPostFragment, post)
  const [destroyPost, isDestroyingPost] =
    useMutation<destroyPostMutation>(DestroyPostMutation)

  if (!data.canDestroy) return null

  return (
    <button
      className="ml-4 rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-gray-400"
      disabled={isDestroyingPost}
      onClick={() => {
        const confirm = window.confirm(
          'Are you sure you want to destroy this post?'
        )

        if (!confirm) return

        destroyPost({
          variables: {
            postId: data.id
          },
          optimisticResponse: {
            destroyPost: {
              post: {
                id: data.id
              }
            }
          }
        })
      }}>
      Destroy
    </button>
  )
}
