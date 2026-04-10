/**
 * @generated SignedSource<<dab278f3ee7cf30d20b240b8cad2f04e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type destroyPostFragment$data = {
  readonly id: string;
  readonly viewerCanDestroy: boolean;
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
      "name": "viewerCanDestroy",
      "storageKey": null
    }
  ],
  "type": "Post",
  "abstractKey": null
};

(node as any).hash = "4d593ba7a2024189ad8884c58832fc15";

export default node;
