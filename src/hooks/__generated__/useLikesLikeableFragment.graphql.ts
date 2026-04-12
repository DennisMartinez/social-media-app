/**
 * @generated SignedSource<<fa8e64a1a574edefe8ed59a26b5f1193>>
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
  readonly user?: {
    readonly likeCount: number;
  };
  readonly viewerHasLiked?: boolean;
  readonly viewerLike?: {
    readonly id: string;
  } | null | undefined;
  readonly " $fragmentType": "useLikesLikeableFragment";
};
export type useLikesLikeableFragment$key = {
  readonly " $data"?: useLikesLikeableFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"useLikesLikeableFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
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
    (v0/*: any*/),
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
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Like",
          "kind": "LinkedField",
          "name": "viewerLike",
          "plural": false,
          "selections": [
            (v0/*: any*/)
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "User",
          "kind": "LinkedField",
          "name": "user",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "likeCount",
              "storageKey": null
            }
          ],
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
})();

(node as any).hash = "2c726372054ac8677b1340b55f19bcf6";

export default node;
