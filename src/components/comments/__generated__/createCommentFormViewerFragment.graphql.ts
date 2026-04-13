/**
 * @generated SignedSource<<2ecaf1e740b69e92b9690c3b9d515b4b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type createCommentFormViewerFragment$data = {
  readonly avatarUrl: string | null | undefined;
  readonly id: string;
  readonly name: string;
  readonly " $fragmentSpreads": FragmentRefs<"profileAvatarFragment">;
  readonly " $fragmentType": "createCommentFormViewerFragment";
};
export type createCommentFormViewerFragment$key = {
  readonly " $data"?: createCommentFormViewerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"createCommentFormViewerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "createCommentFormViewerFragment",
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
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "avatarUrl",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "profileAvatarFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "8cad33df4d1341136fd1601365d26db8";

export default node;
