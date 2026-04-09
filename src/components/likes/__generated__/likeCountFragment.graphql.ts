/**
 * @generated SignedSource<<7d7a16393951f60d71473c0480302c4e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type likeCountFragment$data = {
  readonly __typename: string;
  readonly id: string;
  readonly likesCount?: number;
  readonly " $fragmentType": "likeCountFragment";
};
export type likeCountFragment$key = {
  readonly " $data"?: likeCountFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"likeCountFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "likeCountFragment",
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
          "name": "likesCount",
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

(node as any).hash = "e1eb89a100a0d5fadea93c62afcd5ecb";

export default node;
