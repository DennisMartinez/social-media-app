/**
 * @generated SignedSource<<c40f047e09b566f6393465f8e42b62a7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type followeeFragment$data = {
  readonly email: string;
  readonly id: string;
  readonly name: string;
  readonly " $fragmentSpreads": FragmentRefs<"followButtonFolloweeFragment" | "userAvatarFragment">;
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
      "name": "email",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "followButtonFolloweeFragment"
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

(node as any).hash = "29c6f62c6679dd55d8386c0024c04260";

export default node;
