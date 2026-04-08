/**
 * @generated SignedSource<<49589e47e25e4c20b3bec9244d9f807b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type dashboardQuery$variables = Record<PropertyKey, never>;
export type dashboardQuery$data = {
  readonly currentUser: {
    readonly id: string;
    readonly name: string;
  };
  readonly " $fragmentSpreads": FragmentRefs<"feedFragment" | "navigationQuery">;
};
export type dashboardQuery = {
  response: dashboardQuery$data;
  variables: dashboardQuery$variables;
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
v2 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "dashboardQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "navigationQuery"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "feedFragment"
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "currentUser",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "dashboardQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "currentUser",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "PostConnection",
            "kind": "LinkedField",
            "name": "posts",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "PostEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Post",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "content",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "createdAt",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "endCursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasNextPage",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "posts(first:10)"
          },
          {
            "alias": null,
            "args": (v2/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "Feed_posts",
            "kind": "LinkedHandle",
            "name": "posts"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "38c61b87dbbc98f8a4e9e9caecc7992b",
    "id": null,
    "metadata": {},
    "name": "dashboardQuery",
    "operationKind": "query",
    "text": "query dashboardQuery {\n  ...navigationQuery\n  ...feedFragment\n  currentUser {\n    id\n    name\n  }\n}\n\nfragment destroyPostFragment on Post {\n  id\n}\n\nfragment feedFragment on Query {\n  currentUser {\n    ...postListFragment\n    ...newPostFormFragment\n    id\n  }\n}\n\nfragment navigationQuery on Query {\n  currentUser {\n    id\n    name\n  }\n}\n\nfragment newPostFormFragment on User {\n  id\n}\n\nfragment postListFragment on User {\n  posts(first: 10) {\n    edges {\n      node {\n        id\n        ...postListItemFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  ...newPostFormFragment\n}\n\nfragment postListItemFragment on Post {\n  id\n  content\n  createdAt\n  ...destroyPostFragment\n}\n"
  }
};
})();

(node as any).hash = "0c4489e2c2842a506e2e50348329dd31";

export default node;
