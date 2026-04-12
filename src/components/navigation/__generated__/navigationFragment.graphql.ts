/**
 * @generated SignedSource<<df4891eaac2b5782f07605c64557a49b>>
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
    readonly " $fragmentSpreads": FragmentRefs<"navigationUserFragment">;
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "navigationUserFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "353c5751bee329a427bfc827b237a079";

export default node;
