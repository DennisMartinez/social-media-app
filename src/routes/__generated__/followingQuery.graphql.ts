/**
 * @generated SignedSource<<bdd5a92fcaea27668810f202ea6c1714>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type followingQuery$variables = Record<PropertyKey, never>;
export type followingQuery$data = {
  readonly currentUser: {
    readonly " $fragmentSpreads": FragmentRefs<"followingGridFragment">;
  };
  readonly " $fragmentSpreads": FragmentRefs<"navigationFragment">;
};
export type followingQuery = {
  response: followingQuery$data;
  variables: followingQuery$variables;
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
    "name": "followingQuery",
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
            "name": "followingGridFragment"
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
    "name": "followingQuery",
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
            "name": "following",
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
            "storageKey": "following(first:10)"
          },
          (v0/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2b9710729318d835c2a92279d756ab40",
    "id": null,
    "metadata": {},
    "name": "followingQuery",
    "operationKind": "query",
    "text": "query followingQuery {\n  currentUser {\n    ...followingGridFragment\n    id\n  }\n  ...navigationFragment\n}\n\nfragment followerCardFragment on User {\n  id\n  name\n  avatarUrl\n}\n\nfragment followingGridFragment on User {\n  following(first: 10) {\n    edges {\n      node {\n        id\n        ...followerCardFragment\n      }\n    }\n  }\n}\n\nfragment navigationFragment on Query {\n  currentUser {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "f99f4ebbcab218389eca630fef81e47f";

export default node;
