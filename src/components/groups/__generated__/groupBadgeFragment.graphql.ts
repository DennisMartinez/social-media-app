/**
 * @generated SignedSource<<39cea3d909b1c088bca2dcaaead68f57>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type groupBadgeFragment$data = {
  readonly bio: string | null | undefined;
  readonly id: string;
  readonly name: string;
  readonly " $fragmentSpreads": FragmentRefs<"groupMembershipButtonFragment" | "profileAvatarFragment">;
  readonly " $fragmentType": "groupBadgeFragment";
};
export type groupBadgeFragment$key = {
  readonly " $data"?: groupBadgeFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"groupBadgeFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "groupBadgeFragment",
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "profileAvatarFragment"
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

(node as any).hash = "67be48286da871c697fbe592f448cc1c";

export default node;
