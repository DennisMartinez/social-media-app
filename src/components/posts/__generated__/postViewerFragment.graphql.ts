/**
 * @generated SignedSource<<f4ff8d8347fc377e30fb6c6a4107a96f>>
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
  readonly " $fragmentSpreads": FragmentRefs<"createCommentFormViewerFragment" | "postMenuViewerFragment" | "userAvatarFragment">;
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
      "name": "userAvatarFragment"
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

(node as any).hash = "c5a072c134ba46938cca808c4ade9d70";

export default node;
