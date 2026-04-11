/**
 * @generated SignedSource<<dcaa483bb0c3294e61ee95351bd25238>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type postContentFragment$data = {
  readonly content: string;
  readonly " $fragmentType": "postContentFragment";
};
export type postContentFragment$key = {
  readonly " $data"?: postContentFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"postContentFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "postContentFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "content",
      "storageKey": null
    }
  ],
  "type": "Post",
  "abstractKey": null
};

(node as any).hash = "491e4a71ffef1aa50200d21e8a8f2a9f";

export default node;
