/**
 * @generated SignedSource<<d1361c486f90c08fb4a48fc63ef91f4c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type groupPostListViewerFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"postViewerFragment">;
  readonly " $fragmentType": "groupPostListViewerFragment";
};
export type groupPostListViewerFragment$key = {
  readonly " $data"?: groupPostListViewerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"groupPostListViewerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "groupPostListViewerFragment",
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

(node as any).hash = "b04f09aae48d62b7f9af9e747b3cd4d6";

export default node;
