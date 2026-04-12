/**
 * @generated SignedSource<<0f8884907f072711ab102686e8d4a6c4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type followButtonFollowerFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"useFollowsFollowerFragment">;
  readonly " $fragmentType": "followButtonFollowerFragment";
};
export type followButtonFollowerFragment$key = {
  readonly " $data"?: followButtonFollowerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"followButtonFollowerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "followButtonFollowerFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useFollowsFollowerFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "d55a3aa86b6eb2d31dc68e40fca50d0f";

export default node;
