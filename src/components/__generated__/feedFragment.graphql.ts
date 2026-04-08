/**
 * @generated SignedSource<<cf62669703599a899b075e107fecd0ff>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type feedFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"createPostFormFragment" | "feedListFragment">;
  readonly " $fragmentType": "feedFragment";
};
export type feedFragment$key = {
  readonly " $data"?: feedFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"feedFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "feedFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "feedListFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "createPostFormFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "9853a2937fb68dfeda3b0873e7da2ef9";

export default node;
