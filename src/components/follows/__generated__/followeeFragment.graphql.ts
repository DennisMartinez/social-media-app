/**
 * @generated SignedSource<<076345ea9c05263574394bcb6d3791e9>>
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
      "name": "email",
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

(node as any).hash = "d74664578055e483822bd197191eed2b";

export default node;
