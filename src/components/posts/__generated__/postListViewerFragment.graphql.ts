/**
 * @generated SignedSource<<5cd3c6727e627c5e44f5188ad1a92be7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type postListViewerFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"postViewerFragment">;
  readonly " $fragmentType": "postListViewerFragment";
};
export type postListViewerFragment$key = {
  readonly " $data"?: postListViewerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"postListViewerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "postListViewerFragment",
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

(node as any).hash = "ef1fca7d1aceb3dd0c8be3a92b70f53c";

export default node;
