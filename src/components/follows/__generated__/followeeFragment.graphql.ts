/**
 * @generated SignedSource<<05ad737f6c5c3201d9bc6c6822fd184d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type followeeFragment$data = {
  readonly id: string;
  readonly isFollowing: boolean;
  readonly name: string;
  readonly " $fragmentSpreads": FragmentRefs<"followButtonFragment" | "userAvatarFragment">;
  readonly " $fragmentType": "followeeFragment";
};
export type followeeFragment$key = {
  readonly " $data"?: followeeFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"followeeFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "followeeFragment",
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
      "name": "isFollowing",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "followButtonFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "userAvatarFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "ee9358331168f45c104042ee121a2fbe";

export default node;
