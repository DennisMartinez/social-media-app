/**
 * @generated SignedSource<<4fb40f82355172782546bdae77ab769f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type navigationFragment$data = {
  readonly currentUser: {
    readonly id: string;
    readonly name: string;
  };
  readonly " $fragmentType": "navigationFragment";
};
export type navigationFragment$key = {
  readonly " $data"?: navigationFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"navigationFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "navigationFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "currentUser",
      "plural": false,
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "5a9910fe7ced3a05141a4d9b4fcb227b";

export default node;
