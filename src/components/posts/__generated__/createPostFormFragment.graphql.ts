/**
 * @generated SignedSource<<558c09805bfce969ef3678ddb9e67559>>
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
  readonly " $fragmentSpreads": FragmentRefs<"userAvatarFragment">;
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "userAvatarFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "67895c8c1d715b32b81013ac2f04d762";

export default node;
