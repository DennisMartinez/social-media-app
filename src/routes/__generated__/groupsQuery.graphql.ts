/**
 * @generated SignedSource<<b5c64d5665a2c338053881a8df1913c9>>
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
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
},
v4 = [
  (v3/*: any*/)
],
v5 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 12
  }
];
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
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": (v4/*: any*/),
                "type": "User",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": (v4/*: any*/),
                "type": "Group",
                "abstractKey": null
              }
            ],
            "type": "Node",
            "abstractKey": "__isNode"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v5/*: any*/),
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
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "memberCount",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "viewerCanJoin",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "viewerCanLeave",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "viewerIsMember",
                    "storageKey": null
                  },
                  (v2/*: any*/)
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
        "storageKey": "groups(first:12)"
      },
      {
        "alias": null,
        "args": (v5/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "GroupsGrid_groups",
        "kind": "LinkedHandle",
        "name": "groups"
      }
    ]
  },
  "params": {
    "cacheID": "b41a30ae4f24c59bd9907008e9c0145f",
    "id": null,
    "metadata": {},
    "name": "groupsQuery",
    "operationKind": "query",
    "text": "query groupsQuery {\n  ...navigationFragment\n  ...groupsGridFragment\n}\n\nfragment groupAvatarFragment on Group {\n  name\n  avatarUrl\n}\n\nfragment groupCardFragment on Group {\n  id\n  name\n  bio\n  createdAt\n  ...groupAvatarFragment\n  ...groupMembershipButtonFragment\n}\n\nfragment groupMembershipButtonFragment on Group {\n  id\n  memberCount\n  viewerCanJoin\n  viewerCanLeave\n  viewerIsMember\n}\n\nfragment groupsGridFragment on Query {\n  groups(first: 12) {\n    edges {\n      node {\n        id\n        ...groupCardFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment navigationAccountFragment on User {\n  id\n  name\n  email\n  ...profileAvatarFragment\n}\n\nfragment navigationFragment on Query {\n  viewer {\n    ...navigationMainFragment\n    ...navigationAccountFragment\n    id\n  }\n}\n\nfragment navigationMainFragment on User {\n  id\n}\n\nfragment profileAvatarFragment on Node {\n  __isNode: __typename\n  __typename\n  ... on User {\n    name\n    avatarUrl\n  }\n  ... on Group {\n    name\n    avatarUrl\n  }\n}\n"
  }
};
})();

(node as any).hash = "f619b9ed061c9c5b5978e39e507479ff";

export default node;
