import { useLazyLoadQuery } from 'react-relay'
import { useParams } from 'react-router'
import { graphql } from 'relay-runtime'
import { RecommendedFollows } from '../components/follows/recommended-follows'
import { Navigation } from '../components/navigation'
import { PostList } from '../components/posts/post-list'
import { type userQuery } from './__generated__/userQuery.graphql'

const UserQuery = graphql`
  query userQuery($id: ID!) {
    node(id: $id) {
      ... on User {
        ...postListFragment
        ...recommendedFollowsFragment
      }
    }
    ...navigationFragment
  }
`

export function Component() {
  const params = useParams()
  const data = useLazyLoadQuery<userQuery>(UserQuery, { id: String(params.id) })

  if (!data.node) {
    return <div>User not found</div>
  }

  return (
    <div className="flex h-dvh w-full justify-center gap-8">
      <div className="w-3/12">
        <Navigation query={data} />
      </div>
      <main className="w-6/12">
        <div className="grid w-full gap-4">
          <PostList user={data.node} />
        </div>
      </main>
      <div className="w-3/12">
        <RecommendedFollows user={data.node} />
      </div>
    </div>
  )
}
