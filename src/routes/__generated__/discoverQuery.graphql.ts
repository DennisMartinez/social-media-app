/**
 * @generated SignedSource<<11d4a3e4f6ed690a2754a025f72bc3c4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type discoverQuery$variables = Record<PropertyKey, never>;
export type discoverQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"navigationFragment">;
};
export type discoverQuery = {
  response: discoverQuery$data;
  variables: discoverQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "discoverQuery",
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
    "name": "discoverQuery",
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
    "cacheID": "6496468a3b9b561560139698a47be6fa",
    "id": null,
    "metadata": {},
    "name": "discoverQuery",
    "operationKind": "query",
    "text": "query discoverQuery {\n  ...navigationFragment\n}\n\nfragment navigationFragment on Query {\n  viewer {\n    id\n    name\n    email\n    ...userAvatarFragment\n  }\n}\n\nfragment userAvatarFragment on User {\n  name\n  avatarUrl\n}\n"
  }
};

(node as any).hash = "e4a6a52c48c06df6c978a22600c888f0";

export default node;
