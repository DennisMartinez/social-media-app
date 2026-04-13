/**
 * @generated SignedSource<<caa0286d9d71b63b5051b1dac798e7e8>>
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
  readonly followerCount: number;
  readonly followingCount: number;
  readonly id: string;
  readonly name: string;
  readonly " $fragmentSpreads": FragmentRefs<"profileAvatarFragment" | "userGroupsDropdownFragment">;
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "followerCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "followingCount",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "profileAvatarFragment"
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

(node as any).hash = "de27e6c41cb2cf4523ba400b5152015b";

export default node;
