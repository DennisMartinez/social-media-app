/**
 * @generated SignedSource<<723e104bd6c53e5504f2d9a946553017>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type navigationFragment$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"navigationAccountFragment" | "navigationMainFragment">;
  };
  readonly " $fragmentType": "navigationFragment";
};
export type navigationFragment$key = {
  readonly " $data"?: navigationFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"navigationFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "navigationFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "viewer",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "navigationMainFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "navigationAccountFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "10291cf96380f914108758cc1b68849d";

export default node;
