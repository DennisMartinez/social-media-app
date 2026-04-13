/**
 * @generated SignedSource<<0c4cc9ccf768ba6055fc6b82194c6329>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type profileHeaderViewerFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"followButtonFollowerFragment" | "groupMembershipButtonViewerFragment">;
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

(node as any).hash = "1e8a2ede6bd82ba8909647cf84eff735";

export default node;
