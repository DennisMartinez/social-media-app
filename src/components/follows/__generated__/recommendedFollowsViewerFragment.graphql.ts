/**
 * @generated SignedSource<<e7769dbe3fe67e285d90381db68d593d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type recommendedFollowsViewerFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"followeeViewerFragment">;
  readonly " $fragmentType": "recommendedFollowsViewerFragment";
};
export type recommendedFollowsViewerFragment$key = {
  readonly " $data"?: recommendedFollowsViewerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"recommendedFollowsViewerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "recommendedFollowsViewerFragment",
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

(node as any).hash = "180de516db27bf4788d4b43709af2a15";

export default node;
