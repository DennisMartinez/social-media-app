/**
 * @generated SignedSource<<2ca948ea0b1f7a067605a4d9e37d7fd8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type likeCountFragment$data = {
  readonly likesCount?: number;
  readonly viewerHasLiked?: boolean;
  readonly " $fragmentSpreads": FragmentRefs<"likeFragment" | "unlikeFragment">;
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "likeFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "unlikeFragment"
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

(node as any).hash = "57cad2588cadce48fdb00589749836d0";

export default node;
