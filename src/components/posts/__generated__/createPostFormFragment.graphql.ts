/**
 * @generated SignedSource<<db9f21d342d7d94bdbfaca9bffe7587b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type createPostFormFragment$data = {
  readonly id: string;
  readonly " $fragmentType": "createPostFormFragment";
};
export type createPostFormFragment$key = {
  readonly " $data"?: createPostFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"createPostFormFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "createPostFormFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "1cbf6b9ab24ac2258c262ca137df7a8f";

export default node;
