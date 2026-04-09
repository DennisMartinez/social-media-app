/**
 * @generated SignedSource<<7d4534a98cc27aeda5941cd987141cad>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type createCommentFormFragment$data = {
  readonly id: string;
  readonly " $fragmentType": "createCommentFormFragment";
};
export type createCommentFormFragment$key = {
  readonly " $data"?: createCommentFormFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"createCommentFormFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "createCommentFormFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Node",
  "abstractKey": "__isNode"
};

(node as any).hash = "97ba945585056a93795747d1412d47f7";

export default node;
