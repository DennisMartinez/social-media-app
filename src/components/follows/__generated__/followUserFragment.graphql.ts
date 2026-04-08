/**
 * @generated SignedSource<<d405c3682fa40b5ad95549b23b939fe4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type followUserFragment$data = {
  readonly id: string;
  readonly isFollowing: boolean;
  readonly " $fragmentType": "followUserFragment";
};
export type followUserFragment$key = {
  readonly " $data"?: followUserFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"followUserFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "followUserFragment",
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

(node as any).hash = "11c9f003b0aec62271309f23f0364834";

export default node;
