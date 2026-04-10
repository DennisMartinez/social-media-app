/**
 * @generated SignedSource<<8afa492f9f8f7fb90ee0d358ab87805e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type followButtonFragment$data = {
  readonly id: string;
  readonly viewerCanFollow: boolean;
  readonly viewerIsFollowing: boolean;
  readonly " $fragmentType": "followButtonFragment";
};
export type followButtonFragment$key = {
  readonly " $data"?: followButtonFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"followButtonFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "followButtonFragment",
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
      "name": "viewerIsFollowing",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "viewerCanFollow",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "2dc9854c2942cfd3c2dfaf0e256cb9ee";

export default node;
