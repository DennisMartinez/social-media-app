/**
 * @generated SignedSource<<9bbe395bc97a2c673dea41ae2c9a6664>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type profileStatsFragment$data = {
  readonly commentCount: number;
  readonly likeCount: number;
  readonly postCount: number;
  readonly " $fragmentType": "profileStatsFragment";
};
export type profileStatsFragment$key = {
  readonly " $data"?: profileStatsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"profileStatsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "profileStatsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "postCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "likeCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "commentCount",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "d6b9ef0510fcd03512c1df2d14cc2ea8";

export default node;
