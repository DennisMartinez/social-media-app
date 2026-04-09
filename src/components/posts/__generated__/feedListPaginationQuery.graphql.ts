/**
 * @generated SignedSource<<055af31ddd970f312b9baf3f6213e285>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type feedListPaginationQuery$variables = {
  cursor?: string | null | undefined;
  first?: number | null | undefined;
  id: string;
};
export type feedListPaginationQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"feedListFragment">;
  } | null | undefined;
};
export type feedListPaginationQuery = {
  response: feedListPaginationQuery$data;
  variables: feedListPaginationQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor"
  },
  {
    "defaultValue": 5,
    "kind": "LocalArgument",
    "name": "first"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "first"
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  (v2/*: any*/)
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v7 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 5
  }
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v9 = {
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "feedListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": [
              {
                "kind": "Variable",
                "name": "cursor",
                "variableName": "cursor"
              },
              (v2/*: any*/)
            ],
            "kind": "FragmentSpread",
            "name": "feedListFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "feedListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v5/*: any*/),
                "concreteType": "PostConnection",
                "kind": "LinkedField",
                "name": "feed",
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
                          (v4/*: any*/),
                          (v6/*: any*/),
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
                            "name": "isLikedByCurrentUser",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "canDestroy",
                            "storageKey": null
                          },
                          (v3/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": (v7/*: any*/),
                                    "concreteType": "CommentConnection",
                                    "kind": "LinkedField",
                                    "name": "comments",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "CommentEdge",
                                        "kind": "LinkedField",
                                        "name": "edges",
                                        "plural": true,
                                        "selections": [
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "Comment",
                                            "kind": "LinkedField",
                                            "name": "node",
                                            "plural": false,
                                            "selections": [
                                              (v4/*: any*/),
                                              (v6/*: any*/),
                                              (v3/*: any*/)
                                            ],
                                            "storageKey": null
                                          },
                                          (v8/*: any*/)
                                        ],
                                        "storageKey": null
                                      },
                                      (v9/*: any*/)
                                    ],
                                    "storageKey": "comments(first:5)"
                                  },
                                  {
                                    "alias": null,
                                    "args": (v7/*: any*/),
                                    "filters": null,
                                    "handle": "connection",
                                    "key": "Post_comments",
                                    "kind": "LinkedHandle",
                                    "name": "comments"
                                  }
                                ],
                                "type": "Post",
                                "abstractKey": null
                              }
                            ],
                            "type": "Node",
                            "abstractKey": "__isNode"
                          }
                        ],
                        "storageKey": null
                      },
                      (v8/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v9/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v5/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "User_feed",
                "kind": "LinkedHandle",
                "name": "feed"
              }
            ],
            "type": "User",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5150f883a523873ddb10e15372135a41",
    "id": null,
    "metadata": {},
    "name": "feedListPaginationQuery",
    "operationKind": "query",
    "text": "query feedListPaginationQuery(\n  $cursor: String\n  $first: Int = 5\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...feedListFragment_19XkED\n    id\n  }\n}\n\nfragment commentListFragment on Node {\n  __isNode: __typename\n  ... on Post {\n    comments(first: 5) {\n      edges {\n        node {\n          id\n          content\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n  id\n}\n\nfragment createCommentFormFragment on Node {\n  __isNode: __typename\n  id\n}\n\nfragment destroyPostFragment on Post {\n  id\n  canDestroy\n}\n\nfragment feedListFragment_19XkED on User {\n  feed(after: $cursor, first: $first) {\n    edges {\n      node {\n        id\n        ...postListItemFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment likePostFragment on Post {\n  id\n  isLikedByCurrentUser\n}\n\nfragment postListItemFragment on Post {\n  id\n  content\n  createdAt\n  isLikedByCurrentUser\n  ...likePostFragment\n  ...unlikePostFragment\n  ...destroyPostFragment\n  ...createCommentFormFragment\n  ...commentListFragment\n}\n\nfragment unlikePostFragment on Post {\n  id\n  isLikedByCurrentUser\n}\n"
  }
};
})();

(node as any).hash = "fadbcd8bf043158aa550802ec53336fc";

export default node;
