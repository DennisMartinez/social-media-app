/**
 * @generated SignedSource<<d33d0c050d9cd2d2d89c59bb2788c3f2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type feedFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"feedListFragment" | "newPostFormFragment">;
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
      "name": "newPostFormFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "62159a1ca0fcb424828813867e5237e2";

export default node;
