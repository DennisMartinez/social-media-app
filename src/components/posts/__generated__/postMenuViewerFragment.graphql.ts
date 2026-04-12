/**
 * @generated SignedSource<<a964d2e2b349d5740f516bedb55cb2d6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type postMenuViewerFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"useFollowsFollowerFragment">;
  readonly " $fragmentType": "postMenuViewerFragment";
};
export type postMenuViewerFragment$key = {
  readonly " $data"?: postMenuViewerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"postMenuViewerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "postMenuViewerFragment",
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

(node as any).hash = "927af5a45fa19e805edcc7239af5aa15";

export default node;
