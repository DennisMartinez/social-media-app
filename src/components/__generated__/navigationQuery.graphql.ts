/**
 * @generated SignedSource<<9e8ba7455801ce37b95ad55438ec6a4c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type navigationQuery$data = {
  readonly currentUser: {
    readonly id: string;
    readonly name: string;
  } | null | undefined;
  readonly " $fragmentType": "navigationQuery";
};
export type navigationQuery$key = {
  readonly " $data"?: navigationQuery$data;
  readonly " $fragmentSpreads": FragmentRefs<"navigationQuery">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "navigationQuery",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "currentUser",
      "plural": false,
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
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "221d6d4d4f0cb63e9ee577021cb09e93";

export default node;
