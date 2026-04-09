/**
 * @generated SignedSource<<390495a0f9baa64ba1ce648e3fd9f7f4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type commentCountFragment$data = {
  readonly commentsCount?: number;
  readonly " $fragmentType": "commentCountFragment";
};
export type commentCountFragment$key = {
  readonly " $data"?: commentCountFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"commentCountFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "commentCountFragment",
  "selections": [
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "commentsCount",
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

(node as any).hash = "5a05b4235c130a763046050664bb7ca8";

export default node;
