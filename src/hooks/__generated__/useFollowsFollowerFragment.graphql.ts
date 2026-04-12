/**
 * @generated SignedSource<<cd864b314d862a58ab6b9797f482e733>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type useFollowsFollowerFragment$data = {
  readonly followerCount: number;
  readonly followingCount: number;
  readonly id: string;
  readonly " $fragmentType": "useFollowsFollowerFragment";
};
export type useFollowsFollowerFragment$key = {
  readonly " $data"?: useFollowsFollowerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"useFollowsFollowerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useFollowsFollowerFragment",
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

(node as any).hash = "516bb0cb8c9dabf317fac654c59ff435";

export default node;
