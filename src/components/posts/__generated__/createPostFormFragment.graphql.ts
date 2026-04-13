/**
 * @generated SignedSource<<452d8da44349b2cac3d6af328ffe3bdf>>
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
  readonly " $fragmentSpreads": FragmentRefs<"userAvatarFragment" | "userGroupsDropdownFragment">;
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "userGroupsDropdownFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "78f856eff5da62861d55d8bc0e14ddbf";

export default node;
