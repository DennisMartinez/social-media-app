/**
 * @generated SignedSource<<a3afcec2232669bf0c27b8474e952042>>
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
    }
  ],
  "type": "Post",
  "abstractKey": null
};

(node as any).hash = "ea231761bec4279026da04a9587503d2";

export default node;
