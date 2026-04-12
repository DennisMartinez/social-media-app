/**
 * @generated SignedSource<<5f375cc4b5cb7d7633cf1e47ab970561>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type useFollowsFolloweeFragment$data = {
  readonly followerCount: number;
  readonly followingCount: number;
  readonly id: string;
  readonly " $fragmentType": "useFollowsFolloweeFragment";
};
export type useFollowsFolloweeFragment$key = {
  readonly " $data"?: useFollowsFolloweeFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"useFollowsFolloweeFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useFollowsFolloweeFragment",
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
      "name": "followerCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "followingCount",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "bc49813047f4cab85c6e597e6ad8214a";

export default node;
