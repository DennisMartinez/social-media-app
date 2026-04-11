/**
 * @generated SignedSource<<b07a07b8c2687fee7dd3bd848114eca5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type postStatsFragment$data = {
  readonly commentsCount: number;
  readonly id: string;
  readonly likesCount: number;
  readonly viewerHasLiked: boolean;
  readonly " $fragmentSpreads": FragmentRefs<"useLikesLikeableFragment">;
  readonly " $fragmentType": "postStatsFragment";
};
export type postStatsFragment$key = {
  readonly " $data"?: postStatsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"postStatsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "postStatsFragment",
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
      "name": "likesCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "commentsCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "viewerHasLiked",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useLikesLikeableFragment"
    }
  ],
  "type": "Post",
  "abstractKey": null
};

(node as any).hash = "32613f365dfb527af30973218804dacf";

export default node;
