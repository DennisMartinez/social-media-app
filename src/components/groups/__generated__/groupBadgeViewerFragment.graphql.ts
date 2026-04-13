/**
 * @generated SignedSource<<cff5c301e88e674359578819322abef6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type groupBadgeViewerFragment$data = {
  readonly groupCount: number;
  readonly " $fragmentSpreads": FragmentRefs<"groupMembershipButtonViewerFragment">;
  readonly " $fragmentType": "groupBadgeViewerFragment";
};
export type groupBadgeViewerFragment$key = {
  readonly " $data"?: groupBadgeViewerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"groupBadgeViewerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "groupBadgeViewerFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "groupCount",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "groupMembershipButtonViewerFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "9842d63a2438086d78df405a51af9589";

export default node;
