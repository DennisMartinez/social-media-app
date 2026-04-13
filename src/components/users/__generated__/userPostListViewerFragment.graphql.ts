/**
 * @generated SignedSource<<b130ea821ab44fa92e9946a43f9d8a4c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type userPostListViewerFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"postViewerFragment">;
  readonly " $fragmentType": "userPostListViewerFragment";
};
export type userPostListViewerFragment$key = {
  readonly " $data"?: userPostListViewerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"userPostListViewerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "userPostListViewerFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "postViewerFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "bdd50fc0b27b3e43f9ed5aa5161ba44c";

export default node;
