/**
 * @generated SignedSource<<40487fd38da0b6fe61f6c3bb3ab1f928>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type groupAvatarFragment$data = {
  readonly avatarUrl: string | null | undefined;
  readonly name: string;
  readonly " $fragmentType": "groupAvatarFragment";
};
export type groupAvatarFragment$key = {
  readonly " $data"?: groupAvatarFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"groupAvatarFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "groupAvatarFragment",
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
  "type": "Group",
  "abstractKey": null
};

(node as any).hash = "7a02d165a2c2d828cd3ba38192e1a207";

export default node;
