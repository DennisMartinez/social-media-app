/**
 * @generated SignedSource<<72e36b8c1d82f2233a5ea2fbd29a5545>>
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "avatarUrl",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "87e9e792e69e2a8f5d6e85973d4e7269",
    "id": null,
    "metadata": {},
    "name": "commentsQuery",
    "operationKind": "query",
    "text": "query commentsQuery {\n  ...navigationFragment\n}\n\nfragment navigationFragment on Query {\n  viewer {\n    id\n    name\n    email\n    ...userAvatarFragment\n  }\n}\n\nfragment userAvatarFragment on User {\n  name\n  avatarUrl\n}\n"
  }
};

(node as any).hash = "8e7b2a2cafeb55ceebbbef3079ce7f10";

export default node;
