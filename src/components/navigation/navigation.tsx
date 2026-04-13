import { useFragment } from 'react-relay'
import { graphql } from 'relay-runtime'
import { type navigationFragment$key } from './__generated__/navigationFragment.graphql'
import { NavigationAccount } from './navigation-account'
import { NavigationMain } from './navigation-main'
import { NavigationSocials } from './navigation-socials'

const NavigationFragment = graphql`
  fragment navigationFragment on Query {
    viewer {
      ...navigationMainFragment
      ...navigationAccountFragment
    }
  }
`

interface NavigationProps {
  query: navigationFragment$key
}

export function Navigation({ query }: NavigationProps) {
  const data = useFragment(NavigationFragment, query)

  return (
    <div className="flex h-full flex-col gap-4">
      <NavigationMain viewer={data.viewer} />
      <NavigationSocials />
      <NavigationAccount viewer={data.viewer} />
    </div>
  )
}
