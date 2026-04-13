/**
 * @generated SignedSource<<4fe07262a49ffa34d86aa6e6e01937d5>>
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
  readonly " $fragmentSpreads": FragmentRefs<"followButtonFolloweeFragment" | "profileAvatarFragment">;
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
      "name": "profileAvatarFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "e3c3f801e558b6cb32159ba20ae2e874";

export default node;
