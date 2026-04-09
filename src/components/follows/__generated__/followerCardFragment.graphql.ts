/**
 * @generated SignedSource<<cb519a81373453ef486360c73dd99cc6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type followerCardFragment$data = {
  readonly id: string;
  readonly name: string;
  readonly " $fragmentType": "followerCardFragment";
};
export type followerCardFragment$key = {
  readonly " $data"?: followerCardFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"followerCardFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "followerCardFragment",
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
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "ef2ffae89b7a6df5cb2f57fa9c5f5d35";

export default node;
