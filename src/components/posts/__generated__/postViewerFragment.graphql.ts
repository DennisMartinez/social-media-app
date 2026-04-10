/**
 * @generated SignedSource<<0bb4e7a28adbe9319a5c95dbce9a1baf>>
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
  readonly " $fragmentSpreads": FragmentRefs<"createCommentFormViewerFragment" | "userAvatarFragment">;
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
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "92dc5ce7f4f6e7d4fbbcaaef360b5d1f";

export default node;
