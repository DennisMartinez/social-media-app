/**
 * @generated SignedSource<<1a4f9669e8324f38f00b01dd22ae8ffc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type profileAvatarFragment$data = {
  readonly __typename: "Group";
  readonly avatarUrl: string | null | undefined;
  readonly name: string;
  readonly " $fragmentType": "profileAvatarFragment";
} | {
  readonly __typename: "User";
  readonly avatarUrl: string | null | undefined;
  readonly name: string;
  readonly " $fragmentType": "profileAvatarFragment";
} | {
  // This will never be '%other', but we need some
  // value in case none of the concrete values match.
  readonly __typename: "%other";
  readonly " $fragmentType": "profileAvatarFragment";
};
export type profileAvatarFragment$key = {
  readonly " $data"?: profileAvatarFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"profileAvatarFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "avatarUrl",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "profileAvatarFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "User",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": (v0/*: any*/),
      "type": "Group",
      "abstractKey": null
    }
  ],
  "type": "Node",
  "abstractKey": "__isNode"
};
})();

(node as any).hash = "ebf0ee5ed1f1a9f68a073cb6bb473bed";

export default node;
