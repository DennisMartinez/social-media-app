/**
 * @generated SignedSource<<999555c76eb5823221d630f489da5836>>
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
    readonly " $fragmentSpreads": FragmentRefs<"feedFragment" | "followersCardFragment" | "followingsCardFragment" | "recommendedFollowsFragment">;
  };
  readonly " $fragmentSpreads": FragmentRefs<"navigationFragment">;
};
export type dashboardQuery = {
  response: dashboardQuery$data;
  variables: dashboardQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 5
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
},
v6 = [
  (v4/*: any*/),
  (v5/*: any*/),
  (v1/*: any*/)
],
v7 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "user",
  "plural": false,
  "selections": (v6/*: any*/),
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v9 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  }
],
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v11 = {
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
v12 = [
  (v1/*: any*/)
],
v13 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 3
  }
],
v14 = [
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
          (v1/*: any*/),
          (v4/*: any*/),
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
            "selections": (v12/*: any*/),
            "storageKey": null
          },
          (v5/*: any*/),
          (v8/*: any*/)
        ],
        "storageKey": null
      },
      (v10/*: any*/)
    ],
    "storageKey": null
  },
  (v11/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
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
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "feedFragment"
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
          {
            "alias": null,
            "args": (v0/*: any*/),
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
                      (v1/*: any*/),
                      (v2/*: any*/),
                      (v3/*: any*/),
                      (v7/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "User",
                        "kind": "LinkedField",
                        "name": "currentUser",
                        "plural": false,
                        "selections": (v6/*: any*/),
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "canDestroy",
                        "storageKey": null
                      },
                      (v8/*: any*/),
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
                                "args": (v9/*: any*/),
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
                                          (v1/*: any*/),
                                          (v2/*: any*/),
                                          (v3/*: any*/),
                                          (v7/*: any*/),
                                          (v8/*: any*/)
                                        ],
                                        "storageKey": null
                                      },
                                      (v10/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v11/*: any*/)
                                ],
                                "storageKey": "comments(first:1)"
                              },
                              {
                                "alias": null,
                                "args": (v9/*: any*/),
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
                                "selections": (v12/*: any*/),
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
                  (v10/*: any*/)
                ],
                "storageKey": null
              },
              (v11/*: any*/)
            ],
            "storageKey": "feed(first:5)"
          },
          {
            "alias": null,
            "args": (v0/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "User_feed",
            "kind": "LinkedHandle",
            "name": "feed"
          },
          (v1/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": (v13/*: any*/),
            "concreteType": "UserConnection",
            "kind": "LinkedField",
            "name": "recommendedFollows",
            "plural": false,
            "selections": (v14/*: any*/),
            "storageKey": "recommendedFollows(first:3)"
          },
          {
            "alias": null,
            "args": (v13/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "User_recommendedFollows",
            "kind": "LinkedHandle",
            "name": "recommendedFollows"
          },
          {
            "alias": null,
            "args": (v13/*: any*/),
            "concreteType": "UserConnection",
            "kind": "LinkedField",
            "name": "followers",
            "plural": false,
            "selections": (v14/*: any*/),
            "storageKey": "followers(first:3)"
          },
          {
            "alias": null,
            "args": (v13/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "User_followers",
            "kind": "LinkedHandle",
            "name": "followers"
          },
          {
            "alias": null,
            "args": (v13/*: any*/),
            "concreteType": "UserConnection",
            "kind": "LinkedField",
            "name": "following",
            "plural": false,
            "selections": (v14/*: any*/),
            "storageKey": "following(first:3)"
          },
          {
            "alias": null,
            "args": (v13/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "User_following",
            "kind": "LinkedHandle",
            "name": "following"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6df8eda5c3878ec6d9353e25bdb47728",
    "id": null,
    "metadata": {},
    "name": "dashboardQuery",
    "operationKind": "query",
    "text": "query dashboardQuery {\n  currentUser {\n    ...feedFragment\n    ...recommendedFollowsFragment\n    ...followersCardFragment\n    ...followingsCardFragment\n    id\n  }\n  ...navigationFragment\n}\n\nfragment commentCountFragment on Node {\n  __isNode: __typename\n  ... on Post {\n    commentsCount\n  }\n}\n\nfragment commentFragment on Comment {\n  id\n  content\n  createdAt\n  user {\n    name\n    avatarUrl\n    ...userAvatarFragment\n    id\n  }\n}\n\nfragment commentListFragment on Node {\n  __isNode: __typename\n  ... on Post {\n    comments(first: 1) {\n      edges {\n        node {\n          id\n          ...commentFragment\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n  id\n}\n\nfragment createCommentFormCommentableFragment on Node {\n  __isNode: __typename\n  __typename\n  id\n  ... on Post {\n    commentsCount\n  }\n}\n\nfragment createCommentFormUserFragment on User {\n  id\n  name\n  avatarUrl\n  ...userAvatarFragment\n}\n\nfragment createPostFormFragment on User {\n  id\n  name\n  avatarUrl\n  ...userAvatarFragment\n}\n\nfragment destroyPostFragment on Post {\n  id\n  canDestroy\n}\n\nfragment feedFragment on User {\n  ...feedListFragment\n  ...createPostFormFragment\n}\n\nfragment feedListFragment on User {\n  feed(first: 5) {\n    edges {\n      node {\n        id\n        ...postFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment followButtonFragment on User {\n  id\n  isFollowing\n  currentUser {\n    id\n  }\n}\n\nfragment followeeFragment on User {\n  id\n  name\n  isFollowing\n  ...followButtonFragment\n  ...userAvatarFragment\n}\n\nfragment followersCardFragment on User {\n  followers(first: 3) {\n    edges {\n      node {\n        id\n        ...followeeFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment followingsCardFragment on User {\n  following(first: 3) {\n    edges {\n      node {\n        id\n        ...followeeFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment likeCountFragment on Node {\n  __isNode: __typename\n  ...likeFragment\n  ...unlikeFragment\n  ... on Post {\n    likesCount\n    currentUserLike {\n      id\n    }\n  }\n}\n\nfragment likeFragment on Node {\n  __isNode: __typename\n  __typename\n  id\n  ... on Post {\n    likesCount\n    currentUserLike {\n      id\n    }\n  }\n}\n\nfragment navigationFragment on Query {\n  currentUser {\n    id\n    name\n  }\n}\n\nfragment postFragment on Post {\n  id\n  content\n  createdAt\n  user {\n    name\n    ...userAvatarFragment\n    id\n  }\n  currentUser {\n    name\n    ...userAvatarFragment\n    ...createCommentFormUserFragment\n    id\n  }\n  ...destroyPostFragment\n  ...createCommentFormCommentableFragment\n  ...commentListFragment\n  ...commentCountFragment\n  ...likeCountFragment\n}\n\nfragment recommendedFollowsFragment on User {\n  recommendedFollows(first: 3) {\n    edges {\n      node {\n        id\n        ...followeeFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment unlikeFragment on Node {\n  __isNode: __typename\n  __typename\n  id\n  ... on Post {\n    likesCount\n    currentUserLike {\n      id\n    }\n  }\n}\n\nfragment userAvatarFragment on User {\n  name\n  avatarUrl\n}\n"
  }
};
})();

(node as any).hash = "1a029b78335184f05449d5bab3dd94b5";

export default node;
