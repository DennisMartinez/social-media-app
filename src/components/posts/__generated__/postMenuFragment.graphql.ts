/**
 * @generated SignedSource<<25cd5078423bb4d900f7ae4b6c5dbf16>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type postMenuFragment$data = {
  readonly id: string;
  readonly user: {
    readonly id: string;
    readonly viewerCanFollow: boolean;
    readonly viewerIsFollowing: boolean;
  };
  readonly viewerCanDestroy: boolean;
  readonly viewerHasLiked: boolean;
  readonly " $fragmentSpreads": FragmentRefs<"useLikesLikeableFragment">;
  readonly " $fragmentType": "postMenuFragment";
};
export type postMenuFragment$key = {
  readonly " $data"?: postMenuFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"postMenuFragment">;
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
  "name": "postMenuFragment",
  "selections": [
    (v0/*: any*/),
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
      "kind": "ScalarField",
      "name": "viewerCanDestroy",
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
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "viewerIsFollowing",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "viewerCanFollow",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useLikesLikeableFragment"
    }
  ],
  "type": "Post",
  "abstractKey": null
};
})();

(node as any).hash = "cf9aca18ddca4848a7dc18735b1a7993";

export default node;
