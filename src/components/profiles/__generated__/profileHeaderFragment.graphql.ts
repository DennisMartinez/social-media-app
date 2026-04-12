/**
 * @generated SignedSource<<f9da59cd4a976979922d78f6d517f2b6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type profileHeaderFragment$data = {
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

(node as any).hash = "1dded8db10f5b521009a136e7581fffe";

export default node;
