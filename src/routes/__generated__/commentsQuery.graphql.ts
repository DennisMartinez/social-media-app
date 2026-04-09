/**
 * @generated SignedSource<<dcb53a0a7a478c18aa5e185c5c7f41d9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type commentsQuery$variables = Record<PropertyKey, never>;
export type commentsQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"navigationFragment">;
};
export type commentsQuery = {
  response: commentsQuery$data;
  variables: commentsQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "commentsQuery",
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
    "name": "commentsQuery",
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
    ]
  },
  "params": {
    "cacheID": "1e1540cc8d6541801e37e3890943c9af",
    "id": null,
    "metadata": {},
    "name": "commentsQuery",
    "operationKind": "query",
    "text": "query commentsQuery {\n  ...navigationFragment\n}\n\nfragment navigationFragment on Query {\n  currentUser {\n    id\n    name\n  }\n}\n"
  }
};

(node as any).hash = "8e7b2a2cafeb55ceebbbef3079ce7f10";

export default node;
