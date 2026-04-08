/**
 * @generated SignedSource<<b5632cd6768c6924d1cbb54a5410ccd5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type unlikePostFragment$data = {
  readonly id: string;
  readonly isLikedByCurrentUser: boolean;
  readonly " $fragmentType": "unlikePostFragment";
};
export type unlikePostFragment$key = {
  readonly " $data"?: unlikePostFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"unlikePostFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "unlikePostFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isLikedByCurrentUser",
      "storageKey": null
    }
  ],
  "type": "Post",
  "abstractKey": null
};

(node as any).hash = "1350a00ab31170e917305a0029134fb0";

export default node;
