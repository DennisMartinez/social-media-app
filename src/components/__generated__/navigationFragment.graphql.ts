/**
 * @generated SignedSource<<609e70d7b2f5a75f372c8fd9f9f71aef>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type navigationFragment$data = {
  readonly viewer: {
    readonly email: string;
    readonly id: string;
    readonly name: string;
    readonly " $fragmentSpreads": FragmentRefs<"userAvatarFragment">;
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
      "name": "viewer",
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
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "email",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "userAvatarFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "720e8943d2c67903742d8c9f3fa848ea";

export default node;
