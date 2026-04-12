/**
 * @generated SignedSource<<59075c15782498a74511e0b9843dbc59>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type followersCardViewerFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"followeeViewerFragment">;
  readonly " $fragmentType": "followersCardViewerFragment";
};
export type followersCardViewerFragment$key = {
  readonly " $data"?: followersCardViewerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"followersCardViewerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "followersCardViewerFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "followeeViewerFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "e644fc1f4a860bfbfaaa4d8eeabc7072";

export default node;
