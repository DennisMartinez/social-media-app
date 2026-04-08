/**
 * @generated SignedSource<<3f865849beffd4f004a3ed56d67dde25>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type destroyPostFragment$data = {
  readonly id: string;
  readonly " $fragmentType": "destroyPostFragment";
};
export type destroyPostFragment$key = {
  readonly " $data"?: destroyPostFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"destroyPostFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "destroyPostFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Post",
  "abstractKey": null
};

(node as any).hash = "ccec723482507e53cb384f7145f1196a";

export default node;
