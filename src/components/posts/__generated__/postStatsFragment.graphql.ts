/**
 * @generated SignedSource<<66af91a999ccccf8708bd29ce7f9b489>>
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
  readonly " $fragmentSpreads": FragmentRefs<"useLikesFragment">;
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
      "name": "useLikesFragment"
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

(node as any).hash = "55c9fc1355f89bb554c1ad393699aa85";

export default node;
