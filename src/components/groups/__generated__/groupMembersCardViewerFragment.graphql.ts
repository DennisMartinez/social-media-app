/**
 * @generated SignedSource<<54d21624a60cf76b54d5ae76d4415396>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type groupMembersCardViewerFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"followeeViewerFragment">;
  readonly " $fragmentType": "groupMembersCardViewerFragment";
};
export type groupMembersCardViewerFragment$key = {
  readonly " $data"?: groupMembersCardViewerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"groupMembersCardViewerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "groupMembersCardViewerFragment",
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

(node as any).hash = "8bce175156e3887a3ce39a2dd9494425";

export default node;
