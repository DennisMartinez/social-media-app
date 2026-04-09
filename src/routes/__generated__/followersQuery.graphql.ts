/**
 * @generated SignedSource<<7b1dd1326907eb8acdbce917b74ff1c6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type followersQuery$variables = Record<PropertyKey, never>;
export type followersQuery$data = {
  readonly currentUser: {
    readonly " $fragmentSpreads": FragmentRefs<"followersGridFragment">;
  };
  readonly " $fragmentSpreads": FragmentRefs<"navigationFragment">;
};
export type followersQuery = {
  response: followersQuery$data;
  variables: followersQuery$variables;
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
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "followersQuery",
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
            "name": "followersGridFragment"
          }
        ],
        "storageKey": null
      },
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
    "name": "followersQuery",
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
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 10
              }
            ],
            "concreteType": "UserConnection",
            "kind": "LinkedField",
            "name": "followers",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "UserEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
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
                        "name": "avatarUrl",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "followers(first:10)"
          },
          (v0/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8511436c0c404141922191a4ab40ce4d",
    "id": null,
    "metadata": {},
    "name": "followersQuery",
    "operationKind": "query",
    "text": "query followersQuery {\n  currentUser {\n    ...followersGridFragment\n    id\n  }\n  ...navigationFragment\n}\n\nfragment followerCardFragment on User {\n  id\n  name\n  avatarUrl\n}\n\nfragment followersGridFragment on User {\n  followers(first: 10) {\n    edges {\n      node {\n        id\n        ...followerCardFragment\n      }\n    }\n  }\n}\n\nfragment navigationFragment on Query {\n  currentUser {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "4c9fccbe63b82bf46a16089498235dba";

export default node;
