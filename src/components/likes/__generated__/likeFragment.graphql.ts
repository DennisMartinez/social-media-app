/**
 * @generated SignedSource<<6a3dbc04aa2c1a9886d8b90b2f9b09aa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type likeFragment$data = {
  readonly __typename: string;
  readonly currentUserLike?: {
    readonly id: string;
  } | null | undefined;
  readonly id: string;
  readonly likesCount?: number;
  readonly " $fragmentType": "likeFragment";
};
export type likeFragment$key = {
  readonly " $data"?: likeFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"likeFragment">;
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
  "name": "likeFragment",
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
          "concreteType": "Like",
          "kind": "LinkedField",
          "name": "currentUserLike",
          "plural": false,
          "selections": [
            (v0/*: any*/)
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

(node as any).hash = "4fd7b4f9a703518f8864c6e6214e8774";

export default node;
