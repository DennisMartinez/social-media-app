/**
 * @generated SignedSource<<7f4bf31eea2c544795990cdedb975ccf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type feedFragment$data = {
  readonly currentUser: {
    readonly " $fragmentSpreads": FragmentRefs<"newPostFormFragment" | "postListFragment">;
  };
  readonly " $fragmentType": "feedFragment";
};
export type feedFragment$key = {
  readonly " $data"?: feedFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"feedFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "feedFragment",
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "postListFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "newPostFormFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "32e81975db524b5f9061fcbdcf361ee8";

export default node;
