/**
 * @generated SignedSource<<d26ffc8ac3a0d4c3ccad082c725bea01>>
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
    readonly " $fragmentSpreads": FragmentRefs<"useFollowsFolloweeFragment">;
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
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "useFollowsFolloweeFragment"
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

(node as any).hash = "f1519226be8f91bb4d0a9bc24abdf876";

export default node;
