/**
 * @generated SignedSource<<59dddde5263928295b561453a8c428df>>
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
  readonly memberCount: number;
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
      "name": "memberCount",
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

(node as any).hash = "86539341b1f7c14da8e5b9f013775391";

export default node;
