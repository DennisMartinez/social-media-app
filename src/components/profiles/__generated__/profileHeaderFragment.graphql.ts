/**
 * @generated SignedSource<<af0ff3a58b0822d257c5e7f255c6d842>>
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
  readonly " $fragmentSpreads": FragmentRefs<"followButtonFolloweeFragment" | "userAvatarFragment">;
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
      "name": "userAvatarFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "followButtonFolloweeFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "79ee97a4fabad7921017ede919c0647a";

export default node;
