/**
 * @generated SignedSource<<1cba4e6430123428bf21f27598db4219>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type followButtonFragment$data = {
  readonly currentUser: {
    readonly id: string;
  };
  readonly id: string;
  readonly isFollowing: boolean;
  readonly " $fragmentType": "followButtonFragment";
};
export type followButtonFragment$key = {
  readonly " $data"?: followButtonFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"followButtonFragment">;
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
  "name": "followButtonFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isFollowing",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "currentUser",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
})();

(node as any).hash = "e80a40d3e7c43958b78ea7624f1c33e6";

export default node;
