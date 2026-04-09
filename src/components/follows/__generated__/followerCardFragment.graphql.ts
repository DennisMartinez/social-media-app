/**
 * @generated SignedSource<<f44cc599d82d34aab2274756374c8381>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type followerCardFragment$data = {
  readonly avatarUrl: string | null | undefined;
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "avatarUrl",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "dcaa8e22a88370c89776666bd75d5887";

export default node;
