/**
 * @generated SignedSource<<c7e912feb331b056194cf45d8114d06f>>
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
  readonly " $fragmentSpreads": FragmentRefs<"groupAvatarFragment" | "groupMembershipButtonFragment">;
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "groupMembershipButtonFragment"
    }
  ],
  "type": "Group",
  "abstractKey": null
};

(node as any).hash = "58749c15e41f460c764c28bdc79314cf";

export default node;
