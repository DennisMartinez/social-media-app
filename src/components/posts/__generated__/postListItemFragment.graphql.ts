/**
 * @generated SignedSource<<a4f800ba4e84880bb7ffab8907ddff44>>
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
  readonly " $fragmentSpreads": FragmentRefs<"commentListFragment" | "createCommentFormFragment" | "destroyPostFragment" | "likePostFragment" | "unlikePostFragment">;
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "createCommentFormFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "commentListFragment"
    }
  ],
  "type": "Post",
  "abstractKey": null
};

(node as any).hash = "17ab019e14c10ec25c893c8094d66336";

export default node;
