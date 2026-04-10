/**
 * @generated SignedSource<<83eb5c7780cd1d99fe0feecad516e1f2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type userQuery$variables = {
  id: string;
};
export type userQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"followersCardFragment" | "followingsCardFragment" | "postListFragment" | "recommendedFollowsFragment">;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"navigationFragment">;
};
export type userQuery = {
  response: userQuery$data;
  variables: userQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
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
  "name": "id",
  "storageKey": null
},
v4 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 5
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
},
v9 = [
  (v7/*: any*/),
  (v8/*: any*/),
  (v3/*: any*/)
],
v10 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "user",
  "plural": false,
  "selections": (v9/*: any*/),
  "storageKey": null
},
v11 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  }
],
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v13 = {
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
},
v14 = [
  (v3/*: any*/)
],
v15 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 3
  }
],
v16 = [
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
          (v3/*: any*/),
          (v7/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isFollowing",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "currentUser",
            "plural": false,
            "selections": (v14/*: any*/),
            "storageKey": null
          },
          (v8/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      },
      (v12/*: any*/)
    ],
    "storageKey": null
  },
  (v13/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "userQuery",
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
            "kind": "InlineFragment",
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "postListFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "recommendedFollowsFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "followersCardFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "followingsCardFragment"
              }
            ],
            "type": "User",
            "abstractKey": null
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "userQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v4/*: any*/),
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
                          (v3/*: any*/),
                          (v5/*: any*/),
                          (v6/*: any*/),
                          (v10/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "User",
                            "kind": "LinkedField",
                            "name": "currentUser",
                            "plural": false,
                            "selections": (v9/*: any*/),
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "canDestroy",
                            "storageKey": null
                          },
                          (v2/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "kind": "InlineFragment",
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "commentsCount",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": (v11/*: any*/),
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
                                              (v3/*: any*/),
                                              (v5/*: any*/),
                                              (v6/*: any*/),
                                              (v10/*: any*/),
                                              (v2/*: any*/)
                                            ],
                                            "storageKey": null
                                          },
                                          (v12/*: any*/)
                                        ],
                                        "storageKey": null
                                      },
                                      (v13/*: any*/)
                                    ],
                                    "storageKey": "comments(first:1)"
                                  },
                                  {
                                    "alias": null,
                                    "args": (v11/*: any*/),
                                    "filters": null,
                                    "handle": "connection",
                                    "key": "Post_comments",
                                    "kind": "LinkedHandle",
                                    "name": "comments"
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "likesCount",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Like",
                                    "kind": "LinkedField",
                                    "name": "currentUserLike",
                                    "plural": false,
                                    "selections": (v14/*: any*/),
                                    "storageKey": null
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
                      (v12/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v13/*: any*/)
                ],
                "storageKey": "posts(first:5)"
              },
              {
                "alias": null,
                "args": (v4/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "User_posts",
                "kind": "LinkedHandle",
                "name": "posts"
              },
              {
                "alias": null,
                "args": (v15/*: any*/),
                "concreteType": "UserConnection",
                "kind": "LinkedField",
                "name": "recommendedFollows",
                "plural": false,
                "selections": (v16/*: any*/),
                "storageKey": "recommendedFollows(first:3)"
              },
              {
                "alias": null,
                "args": (v15/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "User_recommendedFollows",
                "kind": "LinkedHandle",
                "name": "recommendedFollows"
              },
              {
                "alias": null,
                "args": (v15/*: any*/),
                "concreteType": "UserConnection",
                "kind": "LinkedField",
                "name": "followers",
                "plural": false,
                "selections": (v16/*: any*/),
                "storageKey": "followers(first:3)"
              },
              {
                "alias": null,
                "args": (v15/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "User_followers",
                "kind": "LinkedHandle",
                "name": "followers"
              },
              {
                "alias": null,
                "args": (v15/*: any*/),
                "concreteType": "UserConnection",
                "kind": "LinkedField",
                "name": "following",
                "plural": false,
                "selections": (v16/*: any*/),
                "storageKey": "following(first:3)"
              },
              {
                "alias": null,
                "args": (v15/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "User_following",
                "kind": "LinkedHandle",
                "name": "following"
              }
            ],
            "type": "User",
            "abstractKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "currentUser",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v7/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a377fc466571ad5912f5bbc750cfcc1f",
    "id": null,
    "metadata": {},
    "name": "userQuery",
    "operationKind": "query",
    "text": "query userQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on User {\n      ...postListFragment\n      ...recommendedFollowsFragment\n      ...followersCardFragment\n      ...followingsCardFragment\n    }\n    id\n  }\n  ...navigationFragment\n}\n\nfragment commentCountFragment on Node {\n  __isNode: __typename\n  ... on Post {\n    commentsCount\n  }\n}\n\nfragment commentFragment on Comment {\n  id\n  content\n  createdAt\n  user {\n    name\n    avatarUrl\n    ...userAvatarFragment\n    id\n  }\n}\n\nfragment commentListFragment on Node {\n  __isNode: __typename\n  ... on Post {\n    comments(first: 1) {\n      edges {\n        node {\n          id\n          ...commentFragment\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n  id\n}\n\nfragment createCommentFormCommentableFragment on Node {\n  __isNode: __typename\n  __typename\n  id\n  ... on Post {\n    commentsCount\n  }\n}\n\nfragment createCommentFormUserFragment on User {\n  id\n  name\n  avatarUrl\n  ...userAvatarFragment\n}\n\nfragment destroyPostFragment on Post {\n  id\n  canDestroy\n}\n\nfragment followButtonFragment on User {\n  id\n  isFollowing\n  currentUser {\n    id\n  }\n}\n\nfragment followeeFragment on User {\n  id\n  name\n  isFollowing\n  ...followButtonFragment\n  ...userAvatarFragment\n}\n\nfragment followersCardFragment on User {\n  followers(first: 3) {\n    edges {\n      node {\n        id\n        ...followeeFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment followingsCardFragment on User {\n  following(first: 3) {\n    edges {\n      node {\n        id\n        ...followeeFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment likeCountFragment on Node {\n  __isNode: __typename\n  ...likeFragment\n  ...unlikeFragment\n  ... on Post {\n    likesCount\n    currentUserLike {\n      id\n    }\n  }\n}\n\nfragment likeFragment on Node {\n  __isNode: __typename\n  __typename\n  id\n  ... on Post {\n    likesCount\n    currentUserLike {\n      id\n    }\n  }\n}\n\nfragment navigationFragment on Query {\n  currentUser {\n    id\n    name\n  }\n}\n\nfragment postFragment on Post {\n  id\n  content\n  createdAt\n  user {\n    name\n    ...userAvatarFragment\n    id\n  }\n  currentUser {\n    name\n    ...userAvatarFragment\n    ...createCommentFormUserFragment\n    id\n  }\n  ...destroyPostFragment\n  ...createCommentFormCommentableFragment\n  ...commentListFragment\n  ...commentCountFragment\n  ...likeCountFragment\n}\n\nfragment postListFragment on User {\n  posts(first: 5) {\n    edges {\n      node {\n        id\n        ...postFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment recommendedFollowsFragment on User {\n  recommendedFollows(first: 3) {\n    edges {\n      node {\n        id\n        ...followeeFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment unlikeFragment on Node {\n  __isNode: __typename\n  __typename\n  id\n  ... on Post {\n    likesCount\n    currentUserLike {\n      id\n    }\n  }\n}\n\nfragment userAvatarFragment on User {\n  name\n  avatarUrl\n}\n"
  }
};
})();

(node as any).hash = "84fe5c8e574269d12a7ff019742e0483";

export default node;
