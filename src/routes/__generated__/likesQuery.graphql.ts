/**
 * @generated SignedSource<<1d3ee231b3bd18805a77f273a9243a6e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type likesQuery$variables = Record<PropertyKey, never>;
export type likesQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"navigationFragment">;
};
export type likesQuery = {
  response: likesQuery$data;
  variables: likesQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "likesQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "navigationFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "likesQuery",
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "75fea7290b9d7804357c27b40c74e929",
    "id": null,
    "metadata": {},
    "name": "likesQuery",
    "operationKind": "query",
    "text": "query likesQuery {\n  ...navigationFragment\n}\n\nfragment navigationFragment on Query {\n  viewer {\n    id\n    name\n  }\n}\n"
  }
};

(node as any).hash = "8fbd97eb65eb36f700e92b46580e1f09";

export default node;
