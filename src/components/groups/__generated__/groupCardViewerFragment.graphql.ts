/**
 * @generated SignedSource<<4217a8a4824e59351a655193df9959c7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type groupCardViewerFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"groupMembershipButtonViewerFragment">;
  readonly " $fragmentType": "groupCardViewerFragment";
};
export type groupCardViewerFragment$key = {
  readonly " $data"?: groupCardViewerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"groupCardViewerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "groupCardViewerFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "groupMembershipButtonViewerFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "e3a2b973e2d2faf21ca8b6182b0b8362";

export default node;
