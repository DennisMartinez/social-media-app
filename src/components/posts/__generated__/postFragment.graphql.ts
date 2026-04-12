/**
 * @generated SignedSource<<6ca8e399ff4e2c87c16ce9dd757d241f>>
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
  readonly " $fragmentSpreads": FragmentRefs<"commentListFragment" | "createCommentFormCommentableFragment" | "postContentFragment" | "postMenuFragment" | "postStatsFragment" | "postUserFragment">;
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

(node as any).hash = "e983d96ec4374f8af76a340bed6dfada";

export default node;
