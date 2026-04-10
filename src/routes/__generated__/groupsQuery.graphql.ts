/**
 * @generated SignedSource<<23f0b65f2fc3b19849ff91ed98098677>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type groupsQuery$variables = Record<PropertyKey, never>;
export type groupsQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"navigationFragment">;
};
export type groupsQuery = {
  response: groupsQuery$data;
  variables: groupsQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "groupsQuery",
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
    "name": "groupsQuery",
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
    "cacheID": "527c6b538765b0d11c319c451aff3e0e",
    "id": null,
    "metadata": {},
    "name": "groupsQuery",
    "operationKind": "query",
    "text": "query groupsQuery {\n  ...navigationFragment\n}\n\nfragment navigationFragment on Query {\n  viewer {\n    id\n    name\n    email\n    ...userAvatarFragment\n  }\n}\n\nfragment userAvatarFragment on User {\n  name\n  avatarUrl\n}\n"
  }
};

(node as any).hash = "3d8296200a2b817e2d0aaa47c3f2ba1e";

export default node;
