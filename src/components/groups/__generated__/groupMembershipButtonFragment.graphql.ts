/**
 * @generated SignedSource<<f5a8473a5addbe45b4cb6f577077f6d2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type groupMembershipButtonFragment$data = {
  readonly id: string;
  readonly viewerCanJoin: boolean;
  readonly viewerCanLeave: boolean;
  readonly viewerIsMember: boolean;
  readonly " $fragmentType": "groupMembershipButtonFragment";
};
export type groupMembershipButtonFragment$key = {
  readonly " $data"?: groupMembershipButtonFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"groupMembershipButtonFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "groupMembershipButtonFragment",
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
      "name": "viewerCanJoin",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "viewerCanLeave",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "viewerIsMember",
      "storageKey": null
    }
  ],
  "type": "Group",
  "abstractKey": null
};

(node as any).hash = "9efa3a7560259c1ec5437a44794faa42";

export default node;
