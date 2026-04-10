/**
 * @generated SignedSource<<dfe1c84551c28651436c34fd03833925>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type useLikesFragment$data = {
  readonly __typename: string;
  readonly id: string;
  readonly likesCount?: number;
  readonly viewerHasLiked?: boolean;
  readonly " $fragmentType": "useLikesFragment";
};
export type useLikesFragment$key = {
  readonly " $data"?: useLikesFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"useLikesFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useLikesFragment",
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

(node as any).hash = "b08e6bd0c835466ff76837c618cfc57c";

export default node;
