/**
 * @generated SignedSource<<973e35807dce4aed56b1011a15340141>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type profileQuery$variables = Record<PropertyKey, never>;
export type profileQuery$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"createPostFormFragment" | "followersCardFragment" | "followingsCardFragment" | "postListFragment" | "postListViewerFragment" | "recommendedFollowsFragment">;
  };
  readonly " $fragmentSpreads": FragmentRefs<"navigationFragment">;
};
export type profileQuery = {
  response: profileQuery$data;
  variables: profileQuery$variables;
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
  "name": "createdAt",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "viewerIsFollowing",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "viewerCanFollow",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
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
  {
    "kind": "Literal",
    "name": "first",
    "value": 3
  }
],
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
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
          (v3/*: any*/),
          (v13/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v4/*: any*/),
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
    "name": "profileQuery",
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "postListFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "postListViewerFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "createPostFormFragment"
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
    "name": "profileQuery",
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
            "args": (v0/*: any*/),
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
                      (v1/*: any*/),
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "User",
                        "kind": "LinkedField",
                        "name": "user",
                        "plural": false,
                        "selections": [
                          (v1/*: any*/),
                          (v3/*: any*/),
                          (v4/*: any*/),
                          (v5/*: any*/),
                          (v6/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v7/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "viewerCanDestroy",
                        "storageKey": null
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
                        "kind": "ScalarField",
                        "name": "commentsCount",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "viewerHasLiked",
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
                                          {
                                            "alias": null,
                                            "args": null,
                                            "concreteType": "User",
                                            "kind": "LinkedField",
                                            "name": "user",
                                            "plural": false,
                                            "selections": [
                                              (v1/*: any*/),
                                              (v3/*: any*/),
                                              (v4/*: any*/)
                                            ],
                                            "storageKey": null
                                          },
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
                                "concreteType": "Like",
                                "kind": "LinkedField",
                                "name": "viewerLike",
                                "plural": false,
                                "selections": [
                                  (v1/*: any*/)
                                ],
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
            "storageKey": "posts(first:5)"
          },
          {
            "alias": null,
            "args": (v0/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "User_posts",
            "kind": "LinkedHandle",
            "name": "posts"
          },
          (v1/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": (v12/*: any*/),
            "concreteType": "UserConnection",
            "kind": "LinkedField",
            "name": "recommendedFollows",
            "plural": false,
            "selections": (v14/*: any*/),
            "storageKey": "recommendedFollows(first:3)"
          },
          {
            "alias": null,
            "args": (v12/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "User_recommendedFollows",
            "kind": "LinkedHandle",
            "name": "recommendedFollows"
          },
          {
            "alias": null,
            "args": (v12/*: any*/),
            "concreteType": "UserConnection",
            "kind": "LinkedField",
            "name": "followers",
            "plural": false,
            "selections": (v14/*: any*/),
            "storageKey": "followers(first:3)"
          },
          {
            "alias": null,
            "args": (v12/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "User_followers",
            "kind": "LinkedHandle",
            "name": "followers"
          },
          {
            "alias": null,
            "args": (v12/*: any*/),
            "concreteType": "UserConnection",
            "kind": "LinkedField",
            "name": "following",
            "plural": false,
            "selections": (v14/*: any*/),
            "storageKey": "following(first:3)"
          },
          {
            "alias": null,
            "args": (v12/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "User_following",
            "kind": "LinkedHandle",
            "name": "following"
          },
          (v13/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "fb5570c1329e9b987fc6b4dce7a41830",
    "id": null,
    "metadata": {},
    "name": "profileQuery",
    "operationKind": "query",
    "text": "query profileQuery {\n  viewer {\n    ...postListFragment\n    ...postListViewerFragment\n    ...createPostFormFragment\n    ...recommendedFollowsFragment\n    ...followersCardFragment\n    ...followingsCardFragment\n    id\n  }\n  ...navigationFragment\n}\n\nfragment commentContentFragment on Comment {\n  content\n}\n\nfragment commentFragment on Comment {\n  id\n  createdAt\n  user {\n    id\n    name\n    avatarUrl\n    ...userAvatarFragment\n  }\n  ...commentContentFragment\n}\n\nfragment commentListFragment on Node {\n  __isNode: __typename\n  ... on Post {\n    comments(first: 1) {\n      edges {\n        node {\n          id\n          ...commentFragment\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n  id\n}\n\nfragment createCommentFormCommentableFragment on Node {\n  __isNode: __typename\n  __typename\n  id\n  ... on Post {\n    commentsCount\n  }\n}\n\nfragment createCommentFormViewerFragment on User {\n  id\n  name\n  avatarUrl\n  ...userAvatarFragment\n}\n\nfragment createPostFormFragment on User {\n  id\n  name\n  avatarUrl\n  ...userAvatarFragment\n}\n\nfragment destroyPostFragment on Post {\n  id\n  viewerCanDestroy\n}\n\nfragment followButtonFragment on User {\n  id\n  viewerIsFollowing\n  viewerCanFollow\n}\n\nfragment followeeFragment on User {\n  id\n  name\n  email\n  ...followButtonFragment\n  ...userAvatarFragment\n}\n\nfragment followersCardFragment on User {\n  followers(first: 3) {\n    edges {\n      node {\n        id\n        ...followeeFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment followingsCardFragment on User {\n  following(first: 3) {\n    edges {\n      node {\n        id\n        ...followeeFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment navigationFragment on Query {\n  viewer {\n    id\n    name\n    email\n    ...userAvatarFragment\n  }\n}\n\nfragment postContentFragment on Post {\n  content\n}\n\nfragment postFragment on Post {\n  id\n  createdAt\n  user {\n    id\n    name\n    ...userAvatarFragment\n  }\n  ...postContentFragment\n  ...destroyPostFragment\n  ...createCommentFormCommentableFragment\n  ...commentListFragment\n  ...postStatsFragment\n  ...postMenuFragment\n}\n\nfragment postListFragment on User {\n  posts(first: 5) {\n    edges {\n      node {\n        id\n        ...postFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment postListViewerFragment on User {\n  ...postViewerFragment\n}\n\nfragment postMenuFragment on Post {\n  id\n  viewerHasLiked\n  viewerCanDestroy\n  user {\n    id\n    viewerIsFollowing\n    viewerCanFollow\n  }\n  ...useLikesLikeableFragment\n}\n\nfragment postStatsFragment on Post {\n  id\n  likesCount\n  commentsCount\n  viewerHasLiked\n  ...useLikesLikeableFragment\n}\n\nfragment postViewerFragment on User {\n  name\n  ...userAvatarFragment\n  ...createCommentFormViewerFragment\n}\n\nfragment recommendedFollowsFragment on User {\n  recommendedFollows(first: 3) {\n    edges {\n      node {\n        id\n        ...followeeFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment useLikesLikeableFragment on Node {\n  __isNode: __typename\n  __typename\n  id\n  ... on Post {\n    likesCount\n    viewerHasLiked\n    viewerLike {\n      id\n    }\n  }\n}\n\nfragment userAvatarFragment on User {\n  name\n  avatarUrl\n}\n"
  }
};
})();

(node as any).hash = "d6dcfdd483a39386fe987d563d5e4635";

export default node;
