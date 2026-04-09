/**
 * @generated SignedSource<<d0853e470fb2c228c3a315fe383821f7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type createPostFormFragment$data = {
  readonly avatarUrl: string | null | undefined;
  readonly id: string;
  readonly name: string;
  readonly " $fragmentSpreads": FragmentRefs<"userAvatarFragment">;
  readonly " $fragmentType": "createPostFormFragment";
};
export type createPostFormFragment$key = {
  readonly " $data"?: createPostFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"createPostFormFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "createPostFormFragment",
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

(node as any).hash = "93ea8abb2e96d21b48524dc002d59f39";

export default node;
