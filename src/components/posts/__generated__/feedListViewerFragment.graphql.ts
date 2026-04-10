/**
 * @generated SignedSource<<6658f10b957918890f1f430a669b18f5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type feedListViewerFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"postViewerFragment">;
  readonly " $fragmentType": "feedListViewerFragment";
};
export type feedListViewerFragment$key = {
  readonly " $data"?: feedListViewerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"feedListViewerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "feedListViewerFragment",
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

(node as any).hash = "93c7e27a3c325eb9dcdea83ccdbd82a1";

export default node;
