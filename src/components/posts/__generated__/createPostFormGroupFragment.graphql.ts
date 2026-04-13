/**
 * @generated SignedSource<<777d83d21b01bfef98d7cd21a06464bc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type createPostFormGroupFragment$data = {
  readonly id: string;
  readonly name: string;
  readonly " $fragmentType": "createPostFormGroupFragment";
};
export type createPostFormGroupFragment$key = {
  readonly " $data"?: createPostFormGroupFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"createPostFormGroupFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "createPostFormGroupFragment",
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
    }
  ],
  "type": "Group",
  "abstractKey": null
};

(node as any).hash = "46dcb799d0a2a4df724db75c3435ba08";

export default node;
