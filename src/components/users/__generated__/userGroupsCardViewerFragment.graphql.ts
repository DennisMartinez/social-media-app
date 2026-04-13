/**
 * @generated SignedSource<<57ab9ce1d53f37afd4996505cdc82f1c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type userGroupsCardViewerFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"groupBadgeViewerFragment">;
  readonly " $fragmentType": "userGroupsCardViewerFragment";
};
export type userGroupsCardViewerFragment$key = {
  readonly " $data"?: userGroupsCardViewerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"userGroupsCardViewerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "userGroupsCardViewerFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "groupBadgeViewerFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "214f26f287875a5e3cc71acd55b857c2";

export default node;
