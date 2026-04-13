/**
 * @generated SignedSource<<74ef1023679abc38e46aabcf3109f247>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type postViewerFragment$data = {
  readonly name: string;
  readonly " $fragmentSpreads": FragmentRefs<"createCommentFormViewerFragment" | "postMenuViewerFragment">;
  readonly " $fragmentType": "postViewerFragment";
};
export type postViewerFragment$key = {
  readonly " $data"?: postViewerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"postViewerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "postViewerFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "createCommentFormViewerFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "postMenuViewerFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "c962a25d94f76c46ccbfc2b3c46f6780";

export default node;
