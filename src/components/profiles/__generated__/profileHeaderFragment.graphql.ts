/**
 * @generated SignedSource<<e3abe4344216303c89d42f54629583d0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type profileHeaderFragment$data = {
  readonly bio: string | null | undefined;
  readonly email: string;
  readonly id: string;
  readonly name: string;
  readonly " $fragmentSpreads": FragmentRefs<"followButtonFragment" | "profileStatsFragment" | "userAvatarFragment">;
  readonly " $fragmentType": "profileHeaderFragment";
};
export type profileHeaderFragment$key = {
  readonly " $data"?: profileHeaderFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"profileHeaderFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "profileHeaderFragment",
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "bio",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "profileStatsFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "userAvatarFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "followButtonFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "02bcc07f261f164e62f1c43a8e8b9015";

export default node;
