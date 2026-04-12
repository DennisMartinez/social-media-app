/**
 * @generated SignedSource<<a44f37b4cb63be5d3f2ea124f23ffe19>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type followeeViewerFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"followButtonFollowerFragment">;
  readonly " $fragmentType": "followeeViewerFragment";
};
export type followeeViewerFragment$key = {
  readonly " $data"?: followeeViewerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"followeeViewerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "followeeViewerFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "followButtonFollowerFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "c84554ed8bb7231ef3255e4c41436ea5";

export default node;
