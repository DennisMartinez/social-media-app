/**
 * @generated SignedSource<<fda814fbe80ab118a3e1aa5c8ecbcd1f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type unfollowUserFragment$data = {
  readonly id: string;
  readonly isFollowing: boolean;
  readonly " $fragmentType": "unfollowUserFragment";
};
export type unfollowUserFragment$key = {
  readonly " $data"?: unfollowUserFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"unfollowUserFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "unfollowUserFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isFollowing",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "007c28be4597854d62faa8f13cc75a31";

export default node;
