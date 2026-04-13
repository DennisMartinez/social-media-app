/**
 * @generated SignedSource<<225882718fb5be6d4fa328c4b9cb4ba5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type profileHeaderFragment$data = {
  readonly __typename: string;
  readonly bio?: string | null | undefined;
  readonly email?: string;
  readonly id: string;
  readonly name?: string;
  readonly owner?: {
    readonly name: string;
  };
  readonly " $fragmentSpreads": FragmentRefs<"followButtonFolloweeFragment" | "groupMembershipButtonFragment" | "profileAvatarFragment">;
  readonly " $fragmentType": "profileHeaderFragment";
};
export type profileHeaderFragment$key = {
  readonly " $data"?: profileHeaderFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"profileHeaderFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bio",
  "storageKey": null
},
v2 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "profileAvatarFragment"
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "profileHeaderFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "email",
          "storageKey": null
        },
        (v1/*: any*/),
        (v2/*: any*/),
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "followButtonFolloweeFragment"
        }
      ],
      "type": "User",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "User",
          "kind": "LinkedField",
          "name": "owner",
          "plural": false,
          "selections": [
            (v0/*: any*/)
          ],
          "storageKey": null
        },
        (v2/*: any*/),
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "groupMembershipButtonFragment"
        }
      ],
      "type": "Group",
      "abstractKey": null
    }
  ],
  "type": "Node",
  "abstractKey": "__isNode"
};
})();

(node as any).hash = "a6399c21a6172cb9967d3d4083bfb5e4";

export default node;
