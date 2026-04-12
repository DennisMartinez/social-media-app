/**
 * @generated SignedSource<<38dd06e459e7d39fe5052b4bae9251f6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type followButtonFolloweeFragment$data = {
  readonly id: string;
  readonly viewerCanFollow: boolean;
  readonly viewerIsFollowing: boolean;
  readonly " $fragmentSpreads": FragmentRefs<"useFollowsFolloweeFragment">;
  readonly " $fragmentType": "followButtonFolloweeFragment";
};
export type followButtonFolloweeFragment$key = {
  readonly " $data"?: followButtonFolloweeFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"followButtonFolloweeFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "followButtonFolloweeFragment",
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
      "name": "viewerIsFollowing",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "viewerCanFollow",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useFollowsFolloweeFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "fb978e21149e429cf9d1eac48a77354e";

export default node;
