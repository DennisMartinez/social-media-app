/**
 * @generated SignedSource<<99902bce9787447a6ad20181ee0bca8c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type groupCardFragment$data = {
  readonly bio: string | null | undefined;
  readonly createdAt: any;
  readonly id: string;
  readonly name: string;
  readonly " $fragmentSpreads": FragmentRefs<"groupAvatarFragment">;
  readonly " $fragmentType": "groupCardFragment";
};
export type groupCardFragment$key = {
  readonly " $data"?: groupCardFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"groupCardFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "groupCardFragment",
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
      "name": "bio",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdAt",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "groupAvatarFragment"
    }
  ],
  "type": "Group",
  "abstractKey": null
};

(node as any).hash = "634cf50d1c3aaa14012a33a83e14801c";

export default node;
