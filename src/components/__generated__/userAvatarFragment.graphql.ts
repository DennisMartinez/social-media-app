/**
 * @generated SignedSource<<c3114d9ea1642e7832e06a3c589ece53>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type userAvatarFragment$data = {
  readonly avatarUrl: string | null | undefined;
  readonly name: string;
  readonly " $fragmentType": "userAvatarFragment";
};
export type userAvatarFragment$key = {
  readonly " $data"?: userAvatarFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"userAvatarFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "userAvatarFragment",
  "selections": [
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
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "db61645d41fccd5e1ffe585ec28bf6d3";

export default node;
