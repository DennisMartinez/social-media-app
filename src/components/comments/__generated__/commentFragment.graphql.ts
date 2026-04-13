/**
 * @generated SignedSource<<db67321c1ee67276ca5f1a53a7c7bcd1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type commentFragment$data = {
  readonly createdAt: any;
  readonly id: string;
  readonly user: {
    readonly avatarUrl: string | null | undefined;
    readonly id: string;
    readonly name: string;
    readonly " $fragmentSpreads": FragmentRefs<"profileAvatarFragment">;
  };
  readonly " $fragmentSpreads": FragmentRefs<"commentContentFragment" | "commentMenuFragment">;
  readonly " $fragmentType": "commentFragment";
};
export type commentFragment$key = {
  readonly " $data"?: commentFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"commentFragment">;
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
  "name": "commentFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdAt",
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
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "avatarUrl",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "profileAvatarFragment"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "commentMenuFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "commentContentFragment"
    }
  ],
  "type": "Comment",
  "abstractKey": null
};
})();

(node as any).hash = "8759391d1e36e92acec169f90c3d25c9";

export default node;
