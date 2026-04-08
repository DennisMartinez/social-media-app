/**
 * @generated SignedSource<<70d9e35f6d9694f844a92e5e8f437b24>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type newPostFormFragment$data = {
  readonly id: string;
  readonly " $fragmentType": "newPostFormFragment";
};
export type newPostFormFragment$key = {
  readonly " $data"?: newPostFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"newPostFormFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "newPostFormFragment",
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

(node as any).hash = "f72ee833bcf58e9ea630f56cbfdea873";

export default node;
