/**
 * @generated SignedSource<<41d3dc22c516f029fe997c07cf2b15ab>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type postListItemFragment$data = {
  readonly content: string;
  readonly createdAt: any;
  readonly id: string;
  readonly " $fragmentSpreads": FragmentRefs<"destroyPostFragment">;
  readonly " $fragmentType": "postListItemFragment";
};
export type postListItemFragment$key = {
  readonly " $data"?: postListItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"postListItemFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "postListItemFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "content",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdAt",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "destroyPostFragment"
    }
  ],
  "type": "Post",
  "abstractKey": null
};

(node as any).hash = "69c847637b4e16d266e51fc875182181";

export default node;
