/**
 * @generated SignedSource<<6f73cc3e0561c899ab0951c92aa526ea>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type createCommentFormCommentableFragment$data = {
  readonly id: string;
  readonly " $fragmentType": "createCommentFormCommentableFragment";
};
export type createCommentFormCommentableFragment$key = {
  readonly " $data"?: createCommentFormCommentableFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"createCommentFormCommentableFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "createCommentFormCommentableFragment",
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

(node as any).hash = "7214a7713aa300adf01d57a00a6a1a83";

export default node;
