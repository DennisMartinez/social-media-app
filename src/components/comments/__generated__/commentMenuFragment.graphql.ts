/**
 * @generated SignedSource<<1c51c9502805ee92f0cc964e7a5a0083>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type commentMenuFragment$data = {
  readonly id: string;
  readonly viewerCanDestroy: boolean;
  readonly " $fragmentType": "commentMenuFragment";
};
export type commentMenuFragment$key = {
  readonly " $data"?: commentMenuFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"commentMenuFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "commentMenuFragment",
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
      "name": "viewerCanDestroy",
      "storageKey": null
    }
  ],
  "type": "Comment",
  "abstractKey": null
};

(node as any).hash = "549909b31cb26d48e4c1355bc1fbbdff";

export default node;
