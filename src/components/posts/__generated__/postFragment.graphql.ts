/**
 * @generated SignedSource<<51ce22d4a0a6915718156d2587d0b41a>>
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
  readonly user: {
    readonly name: string;
    readonly " $fragmentSpreads": FragmentRefs<"userAvatarFragment">;
  };
  readonly " $fragmentSpreads": FragmentRefs<"commentListFragment" | "createCommentFormCommentableFragment" | "destroyPostFragment" | "postMenuFragment" | "postStatsFragment">;
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
        }
      ],
      "storageKey": null
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
      "name": "postStatsFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "postMenuFragment"
    }
  ],
  "type": "Post",
  "abstractKey": null
};

(node as any).hash = "9c39ca48f406ae6045901ca06bb6f4f9";

export default node;
