/**
 * @generated SignedSource<<416bee9bc25105efcc3bd3d8ef7b9a84>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type navigationAccountFragment$data = {
  readonly email: string;
  readonly id: string;
  readonly name: string;
  readonly " $fragmentSpreads": FragmentRefs<"profileAvatarFragment">;
  readonly " $fragmentType": "navigationAccountFragment";
};
export type navigationAccountFragment$key = {
  readonly " $data"?: navigationAccountFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"navigationAccountFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "navigationAccountFragment",
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
      "name": "profileAvatarFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "38ee95f986814a8c2c8b6268920ec541";

export default node;
