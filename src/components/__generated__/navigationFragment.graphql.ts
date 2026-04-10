/**
 * @generated SignedSource<<c3fab9534c0ef3f245d3856c939e34bb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type navigationFragment$data = {
  readonly viewer: {
    readonly id: string;
    readonly name: string;
  };
  readonly " $fragmentType": "navigationFragment";
};
export type navigationFragment$key = {
  readonly " $data"?: navigationFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"navigationFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "navigationFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "viewer",
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

(node as any).hash = "3e07cbf44f16c0ca2d13621fd4886116";

export default node;
