/**
 * @generated SignedSource<<37b78b75697573fae592ec31a2b8f95d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type destroyPostFragment$data = {
  readonly canDestroy: boolean;
  readonly id: string;
  readonly " $fragmentType": "destroyPostFragment";
};
export type destroyPostFragment$key = {
  readonly " $data"?: destroyPostFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"destroyPostFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "destroyPostFragment",
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
      "name": "canDestroy",
      "storageKey": null
    }
  ],
  "type": "Post",
  "abstractKey": null
};

(node as any).hash = "a2b2618892b0164775b1379b2d428b34";

export default node;
