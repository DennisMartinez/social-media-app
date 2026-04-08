/**
 * @generated SignedSource<<2027343c922e4b58950ab249a815b702>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type postListItemFragment$data = {
  readonly content: string;
  readonly createdAt: any;
  readonly id: string;
  readonly isLikedByCurrentUser: boolean;
  readonly " $fragmentSpreads": FragmentRefs<"destroyPostFragment" | "likePostFragment" | "unlikePostFragment">;
  readonly " $fragmentType": "postListItemFragment";
};
export type postListItemFragment$key = {
  readonly " $data"?: postListItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"postListItemFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "postListItemFragment",
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
      "name": "content",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isLikedByCurrentUser",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "likePostFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "unlikePostFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "destroyPostFragment"
    }
  ],
  "type": "Post",
  "abstractKey": null
};

(node as any).hash = "566177a1a0c20c3916af60f7755e3179";

export default node;
