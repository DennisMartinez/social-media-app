/**
 * @generated SignedSource<<4acafba8dfdb5cebe93ad3583987803e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type useLikesLikeableFragment$data = {
  readonly __typename: string;
  readonly id: string;
  readonly likesCount?: number;
  readonly viewerHasLiked?: boolean;
  readonly " $fragmentType": "useLikesLikeableFragment";
};
export type useLikesLikeableFragment$key = {
  readonly " $data"?: useLikesLikeableFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"useLikesLikeableFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useLikesLikeableFragment",
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
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "viewerHasLiked",
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

(node as any).hash = "59c61d96b0807edc6163452d15f53512";

export default node;
