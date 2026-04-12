/**
 * @generated SignedSource<<196658f11e26cb79bbf522a376bb9b9a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type navigationUserFragment$data = {
  readonly email: string;
  readonly id: string;
  readonly name: string;
  readonly " $fragmentSpreads": FragmentRefs<"userAvatarFragment">;
  readonly " $fragmentType": "navigationUserFragment";
};
export type navigationUserFragment$key = {
  readonly " $data"?: navigationUserFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"navigationUserFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "navigationUserFragment",
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
      "name": "userAvatarFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "ce22b0e2634080c04790c85af93bfdfb";

export default node;
