/**
 * @generated SignedSource<<46dac4495490d766bd9afe009dbb4f0b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type postFragment$data = {
  readonly id: string;
  readonly " $fragmentSpreads": FragmentRefs<"commentListFragment" | "createCommentFormCommentableFragment" | "destroyPostFragment" | "postContentFragment" | "postMenuFragment" | "postStatsFragment" | "postUserFragment">;
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "postUserFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "postContentFragment"
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

(node as any).hash = "cbcf2a077a3502313919d7b2d0ab8cbc";

export default node;
