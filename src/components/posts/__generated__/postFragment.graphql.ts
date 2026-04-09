/**
 * @generated SignedSource<<27c1073c52a0106629379322a6333121>>
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
  readonly " $fragmentSpreads": FragmentRefs<"commentCountFragment" | "commentListFragment" | "createCommentFormCommentableFragment" | "destroyPostFragment" | "likeCountFragment" | "likePostFragment" | "unlikePostFragment">;
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "commentCountFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "likeCountFragment"
    }
  ],
  "type": "Post",
  "abstractKey": null
};

(node as any).hash = "24971cbb0e21d086a839899151f010e5";

export default node;
