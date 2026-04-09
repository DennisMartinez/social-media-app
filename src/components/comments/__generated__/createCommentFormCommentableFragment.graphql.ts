/**
 * @generated SignedSource<<0c5cba0f7aa79e213f636264c2ceb592>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type createCommentFormCommentableFragment$data = {
  readonly __typename: string;
  readonly commentsCount?: number;
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
      "name": "__typename",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "commentsCount",
          "storageKey": null
        }
      ],
      "type": "Post",
      "abstractKey": null
    }
  ],
  "type": "Node",
  "abstractKey": "__isNode"
};

(node as any).hash = "1da3167f2d46a4fde808852d1558d963";

export default node;
