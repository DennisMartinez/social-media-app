/**
 * @generated SignedSource<<7854defcf6e7484b0396d0690c70a9dc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type profileHeaderViewerFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"followButtonFollowerFragment">;
  readonly " $fragmentType": "profileHeaderViewerFragment";
};
export type profileHeaderViewerFragment$key = {
  readonly " $data"?: profileHeaderViewerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"profileHeaderViewerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "profileHeaderViewerFragment",
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

(node as any).hash = "c76eb5c6e2bb39516d7dbf50869edc71";

export default node;
