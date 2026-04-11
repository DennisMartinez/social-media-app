/**
 * @generated SignedSource<<1ab81a140e784419d2eb53bda1f687f1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type commentContentFragment$data = {
  readonly content: string;
  readonly " $fragmentType": "commentContentFragment";
};
export type commentContentFragment$key = {
  readonly " $data"?: commentContentFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"commentContentFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "commentContentFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "content",
      "storageKey": null
    }
  ],
  "type": "Comment",
  "abstractKey": null
};

(node as any).hash = "7c1745ef678e2fc0e344ab34d5b6bc0a";

export default node;
