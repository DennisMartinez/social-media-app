/**
 * @generated SignedSource<<7430d661a2f45186b878da41d3a16beb>>
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
  readonly user: {
    readonly name: string;
    readonly " $fragmentSpreads": FragmentRefs<"createCommentFormUserFragment" | "userAvatarFragment">;
  };
  readonly " $fragmentSpreads": FragmentRefs<"commentListFragment" | "createCommentFormCommentableFragment" | "destroyPostFragment" | "likePostFragment" | "unlikePostFragment">;
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
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "user",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "userAvatarFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "createCommentFormUserFragment"
        }
      ],
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
      "name": "createCommentFormCommentableFragment"
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

(node as any).hash = "c2b6d63b758a61ee55080fc918ef5ca2";

export default node;
