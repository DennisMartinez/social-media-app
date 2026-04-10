/**
 * @generated SignedSource<<e75a07f9941dbb6e74fee991c4e271b3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type unlikeFragment$data = {
  readonly __typename: string;
  readonly currentUserLike?: {
    readonly id: string;
  } | null | undefined;
  readonly id: string;
  readonly likesCount?: number;
  readonly " $fragmentType": "unlikeFragment";
};
export type unlikeFragment$key = {
  readonly " $data"?: unlikeFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"unlikeFragment">;
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
  "name": "unlikeFragment",
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

(node as any).hash = "b792068f628b94ae104704b936f2e91b";

export default node;
