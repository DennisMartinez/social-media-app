/**
 * @generated SignedSource<<828547509d655cb47eb8960afd3d0b95>>
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "useLikesLikeableFragment"
    },
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
    }
  ],
  "type": "Post",
  "abstractKey": null
};

(node as any).hash = "e7c25be03d2d4ff60d0e5c8efe545d44";

export default node;
