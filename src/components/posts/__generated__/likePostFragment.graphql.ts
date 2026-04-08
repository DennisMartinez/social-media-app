/**
 * @generated SignedSource<<a0ecd20b6ed42ec6d6ac4f5c972cc598>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type likePostFragment$data = {
  readonly id: string;
  readonly isLikedByCurrentUser: boolean;
  readonly " $fragmentType": "likePostFragment";
};
export type likePostFragment$key = {
  readonly " $data"?: likePostFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"likePostFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "likePostFragment",
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

(node as any).hash = "f94d43bad4549101eb61e6bf00e88bf4";

export default node;
