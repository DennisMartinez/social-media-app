import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type followerCardFragment$key } from './__generated__/followerCardFragment.graphql'

const FollowerCardFragment = graphql`
  fragment followerCardFragment on User {
    id
    name
    avatarUrl
    # username
    # profilePictureUrl
  }
`

interface FollowerCardProps {
  follower: followerCardFragment$key
}

export function FollowerCard({ follower }: FollowerCardProps) {
  const data = useFragment(FollowerCardFragment, follower)

  return (
    <div className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow-sm">
      <div className="flex flex-1 flex-col p-8">
        <img
          alt={data.name}
          src={data.avatarUrl}
          className="mx-auto size-32 shrink-0 rounded-full bg-gray-300 outline -outline-offset-1 outline-black/5"
        />
        <h3 className="mt-6 text-sm font-medium text-gray-900">{data.name}</h3>
        <dl className="mt-1 flex grow flex-col justify-between">
          <dt className="sr-only">Title</dt>
          <dd className="text-sm text-gray-500">{data.title}</dd>
          <dt className="sr-only">Role</dt>
          <dd className="mt-3">
            <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 inset-ring inset-ring-green-600/20">
              {data.role}
            </span>
          </dd>
        </dl>
      </div>
      {/* <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="flex w-0 flex-1">
            <a
              href={`mailto:${person.email}`}
              className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
              <EnvelopeIcon
                aria-hidden="true"
                className="size-5 text-gray-400"
              />
              Email
            </a>
          </div>
          <div className="-ml-px flex w-0 flex-1">
            <a
              href={`tel:${person.telephone}`}
              className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
              <PhoneIcon aria-hidden="true" className="size-5 text-gray-400" />
              Call
            </a>
          </div>
        </div>
      </div> */}
    </div>
  )
}
