/**
 * @generated SignedSource<<ddc2c0c9b3b5a90ff3f1118cc1d5838d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type postFragment$data = {
  readonly content: string;
  readonly createdAt: any;
  readonly id: string;
  readonly isLikedByCurrentUser: boolean;
  readonly user: {
    readonly name: string;
    readonly " $fragmentSpreads": FragmentRefs<"createCommentFormUserFragment" | "userAvatarFragment">;
  };
  readonly " $fragmentSpreads": FragmentRefs<"commentListFragment" | "createCommentFormCommentableFragment" | "destroyPostFragment" | "likePostFragment" | "unlikePostFragment">;
  readonly " $fragmentType": "postFragment";
};
export type postFragment$key = {
  readonly " $data"?: postFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"postFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "postFragment",
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

(node as any).hash = "d38eec42f9b323cfff211bef3d8210db";

export default node;
