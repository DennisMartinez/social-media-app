/**
 * @generated SignedSource<<1168ff0647b7da181b8f41787387ae57>>
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
  readonly " $fragmentSpreads": FragmentRefs<"groupsGridFragment" | "navigationFragment">;
};
export type groupsQuery = {
  response: groupsQuery$data;
  variables: groupsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
};
return {
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
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "groupsGridFragment"
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
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "GroupConnection",
        "kind": "LinkedField",
        "name": "groups",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "GroupEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Group",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "bio",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "createdAt",
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d38995382fcccc38faf42635d8d1086a",
    "id": null,
    "metadata": {},
    "name": "groupsQuery",
    "operationKind": "query",
    "text": "query groupsQuery {\n  ...navigationFragment\n  ...groupsGridFragment\n}\n\nfragment groupAvatarFragment on Group {\n  name\n  avatarUrl\n}\n\nfragment groupCardFragment on Group {\n  id\n  name\n  bio\n  createdAt\n  ...groupAvatarFragment\n}\n\nfragment groupsGridFragment on Query {\n  groups {\n    edges {\n      node {\n        id\n        ...groupCardFragment\n      }\n    }\n  }\n}\n\nfragment navigationFragment on Query {\n  viewer {\n    ...navigationUserFragment\n    id\n  }\n}\n\nfragment navigationUserFragment on User {\n  id\n  name\n  email\n  ...userAvatarFragment\n}\n\nfragment userAvatarFragment on User {\n  name\n  avatarUrl\n}\n"
  }
};
})();

(node as any).hash = "f619b9ed061c9c5b5978e39e507479ff";

export default node;
