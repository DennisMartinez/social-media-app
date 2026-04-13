/**
 * @generated SignedSource<<42c74a1b1f352f91ef192b2b1d6646fa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type feedQuery$variables = Record<PropertyKey, never>;
export type feedQuery$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"createPostFormFragment" | "feedListFragment" | "feedListViewerFragment" | "followersCardFragment" | "followersCardViewerFragment" | "followingsCardFragment" | "followingsCardViewerFragment" | "recommendedFollowsFragment" | "recommendedFollowsViewerFragment" | "userGroupsCardFragment" | "userGroupsCardViewerFragment">;
  };
  readonly " $fragmentSpreads": FragmentRefs<"navigationFragment">;
};
export type feedQuery = {
  response: feedQuery$data;
  variables: feedQuery$variables;
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
  "name": "viewerIsFollowing",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "viewerCanFollow",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "followerCount",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "followingCount",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
},
v10 = [
  (v9/*: any*/)
],
v11 = {
  "kind": "InlineFragment",
  "selections": (v10/*: any*/),
  "type": "User",
  "abstractKey": null
},
v12 = {
  "kind": "InlineFragment",
  "selections": (v10/*: any*/),
  "type": "Group",
  "abstractKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "viewerCanDestroy",
  "storageKey": null
},
v15 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  }
],
v16 = {
  "kind": "InlineFragment",
  "selections": [
    (v8/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v18 = {
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
v19 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 3
  }
],
v20 = {
  "kind": "InlineFragment",
  "selections": [
    (v11/*: any*/),
    (v12/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v22 = [
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
          (v21/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v20/*: any*/)
        ],
        "storageKey": null
      },
      (v17/*: any*/)
    ],
    "storageKey": null
  },
  (v18/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "feedQuery",
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
            "name": "feedListFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "feedListViewerFragment"
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
            "name": "recommendedFollowsViewerFragment"
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
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "followersCardViewerFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "followingsCardViewerFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "userGroupsCardFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "userGroupsCardViewerFragment"
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
    "name": "feedQuery",
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
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Group",
                        "kind": "LinkedField",
                        "name": "group",
                        "plural": false,
                        "selections": [
                          (v1/*: any*/),
                          (v3/*: any*/)
                        ],
                        "storageKey": null
                      },
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
                          (v6/*: any*/),
                          (v7/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              (v8/*: any*/),
                              (v11/*: any*/),
                              (v12/*: any*/)
                            ],
                            "type": "Node",
                            "abstractKey": "__isNode"
                          }
                        ],
                        "storageKey": null
                      },
                      (v13/*: any*/),
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
                      (v14/*: any*/),
                      (v8/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          {
                            "kind": "InlineFragment",
                            "selections": [
                              {
                                "alias": null,
                                "args": (v15/*: any*/),
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
                                              (v9/*: any*/),
                                              (v16/*: any*/)
                                            ],
                                            "storageKey": null
                                          },
                                          (v14/*: any*/),
                                          (v13/*: any*/),
                                          (v8/*: any*/)
                                        ],
                                        "storageKey": null
                                      },
                                      (v17/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v18/*: any*/)
                                ],
                                "storageKey": "comments(first:1)"
                              },
                              {
                                "alias": null,
                                "args": (v15/*: any*/),
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
                  (v17/*: any*/)
                ],
                "storageKey": null
              },
              (v18/*: any*/)
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
          (v3/*: any*/),
          (v9/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "groupCount",
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v19/*: any*/),
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
                      (v1/*: any*/),
                      (v3/*: any*/),
                      (v8/*: any*/),
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
                      (v20/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v17/*: any*/)
                ],
                "storageKey": null
              },
              (v18/*: any*/)
            ],
            "storageKey": "groups(first:3)"
          },
          {
            "alias": null,
            "args": (v19/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "User_groups",
            "kind": "LinkedHandle",
            "name": "groups"
          },
          {
            "alias": null,
            "args": (v19/*: any*/),
            "concreteType": "UserConnection",
            "kind": "LinkedField",
            "name": "recommendedFollows",
            "plural": false,
            "selections": (v22/*: any*/),
            "storageKey": "recommendedFollows(first:3)"
          },
          {
            "alias": null,
            "args": (v19/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "User_recommendedFollows",
            "kind": "LinkedHandle",
            "name": "recommendedFollows"
          },
          {
            "alias": null,
            "args": (v19/*: any*/),
            "concreteType": "UserConnection",
            "kind": "LinkedField",
            "name": "followers",
            "plural": false,
            "selections": (v22/*: any*/),
            "storageKey": "followers(first:3)"
          },
          {
            "alias": null,
            "args": (v19/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "User_followers",
            "kind": "LinkedHandle",
            "name": "followers"
          },
          {
            "alias": null,
            "args": (v19/*: any*/),
            "concreteType": "UserConnection",
            "kind": "LinkedField",
            "name": "following",
            "plural": false,
            "selections": (v22/*: any*/),
            "storageKey": "following(first:3)"
          },
          {
            "alias": null,
            "args": (v19/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "User_following",
            "kind": "LinkedHandle",
            "name": "following"
          },
          (v21/*: any*/),
          (v16/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b1768c8c2413ef222d3e7e4c8209e889",
    "id": null,
    "metadata": {},
    "name": "feedQuery",
    "operationKind": "query",
    "text": "query feedQuery {\n  viewer {\n    ...feedListFragment\n    ...feedListViewerFragment\n    ...createPostFormFragment\n    ...recommendedFollowsFragment\n    ...recommendedFollowsViewerFragment\n    ...followersCardFragment\n    ...followingsCardFragment\n    ...followersCardViewerFragment\n    ...followingsCardViewerFragment\n    ...userGroupsCardFragment\n    ...userGroupsCardViewerFragment\n    id\n  }\n  ...navigationFragment\n}\n\nfragment commentContentFragment on Comment {\n  content\n}\n\nfragment commentFragment on Comment {\n  id\n  createdAt\n  user {\n    id\n    name\n    avatarUrl\n    ...profileAvatarFragment\n  }\n  ...commentMenuFragment\n  ...commentContentFragment\n}\n\nfragment commentListFragment on Node {\n  __isNode: __typename\n  ... on Post {\n    comments(first: 1) {\n      edges {\n        node {\n          id\n          ...commentFragment\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n  id\n}\n\nfragment commentMenuFragment on Comment {\n  id\n  viewerCanDestroy\n}\n\nfragment createCommentFormCommentableFragment on Node {\n  __isNode: __typename\n  __typename\n  id\n  ... on Post {\n    commentsCount\n  }\n}\n\nfragment createCommentFormViewerFragment on User {\n  id\n  name\n  avatarUrl\n  ...profileAvatarFragment\n}\n\nfragment createPostFormFragment on User {\n  id\n  name\n  avatarUrl\n  followerCount\n  followingCount\n  ...profileAvatarFragment\n  ...userGroupsDropdownFragment\n}\n\nfragment feedListFragment on User {\n  feed(first: 5) {\n    edges {\n      node {\n        id\n        ...postFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment feedListViewerFragment on User {\n  ...postViewerFragment\n}\n\nfragment followButtonFolloweeFragment on User {\n  id\n  viewerIsFollowing\n  viewerCanFollow\n  ...useFollowsFolloweeFragment\n}\n\nfragment followButtonFollowerFragment on User {\n  ...useFollowsFollowerFragment\n}\n\nfragment followeeFragment on User {\n  id\n  name\n  email\n  ...followButtonFolloweeFragment\n  ...profileAvatarFragment\n}\n\nfragment followeeViewerFragment on User {\n  ...followButtonFollowerFragment\n}\n\nfragment followersCardFragment on User {\n  followerCount\n  followers(first: 3) {\n    edges {\n      node {\n        id\n        ...followeeFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment followersCardViewerFragment on User {\n  ...followeeViewerFragment\n}\n\nfragment followingsCardFragment on User {\n  followingCount\n  following(first: 3) {\n    edges {\n      node {\n        id\n        ...followeeFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment followingsCardViewerFragment on User {\n  ...followeeViewerFragment\n}\n\nfragment groupBadgeFragment on Group {\n  id\n  name\n  bio\n  ...profileAvatarFragment\n  ...groupMembershipButtonFragment\n}\n\nfragment groupBadgeViewerFragment on User {\n  groupCount\n  ...groupMembershipButtonViewerFragment\n}\n\nfragment groupMembershipButtonFragment on Group {\n  id\n  memberCount\n  viewerCanJoin\n  viewerCanLeave\n  viewerIsMember\n}\n\nfragment groupMembershipButtonViewerFragment on User {\n  id\n  groupCount\n}\n\nfragment navigationAccountFragment on User {\n  id\n  name\n  email\n  ...profileAvatarFragment\n}\n\nfragment navigationFragment on Query {\n  viewer {\n    ...navigationMainFragment\n    ...navigationAccountFragment\n    id\n  }\n}\n\nfragment navigationMainFragment on User {\n  id\n}\n\nfragment postContentFragment on Post {\n  content\n}\n\nfragment postFragment on Post {\n  id\n  ...postUserFragment\n  ...postContentFragment\n  ...createCommentFormCommentableFragment\n  ...commentListFragment\n  ...postStatsFragment\n  ...postMenuFragment\n}\n\nfragment postMenuFragment on Post {\n  id\n  viewerHasLiked\n  viewerCanDestroy\n  user {\n    id\n    viewerIsFollowing\n    viewerCanFollow\n    ...useFollowsFolloweeFragment\n  }\n  ...useLikesLikeableFragment\n}\n\nfragment postMenuViewerFragment on User {\n  ...useFollowsFollowerFragment\n}\n\nfragment postStatsFragment on Post {\n  id\n  likesCount\n  commentsCount\n  viewerHasLiked\n  ...useLikesLikeableFragment\n}\n\nfragment postUserFragment on Post {\n  createdAt\n  group {\n    id\n    name\n  }\n  user {\n    id\n    name\n    ...profileAvatarFragment\n  }\n}\n\nfragment postViewerFragment on User {\n  name\n  ...createCommentFormViewerFragment\n  ...postMenuViewerFragment\n}\n\nfragment profileAvatarFragment on Node {\n  __isNode: __typename\n  __typename\n  ... on User {\n    name\n    avatarUrl\n  }\n  ... on Group {\n    name\n    avatarUrl\n  }\n}\n\nfragment recommendedFollowsFragment on User {\n  recommendedFollows(first: 3) {\n    edges {\n      node {\n        id\n        ...followeeFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment recommendedFollowsViewerFragment on User {\n  ...followeeViewerFragment\n}\n\nfragment useFollowsFolloweeFragment on User {\n  id\n  followerCount\n  followingCount\n}\n\nfragment useFollowsFollowerFragment on User {\n  id\n  followerCount\n  followingCount\n}\n\nfragment useLikesLikeableFragment on Node {\n  __isNode: __typename\n  __typename\n  id\n  ... on Post {\n    likesCount\n    viewerHasLiked\n    viewerLike {\n      id\n    }\n  }\n}\n\nfragment userGroupsCardFragment on User {\n  groupCount\n  groups(first: 3) {\n    edges {\n      node {\n        id\n        ...groupBadgeFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment userGroupsCardViewerFragment on User {\n  ...groupBadgeViewerFragment\n}\n\nfragment userGroupsDropdownFragment on User {\n  groupCount\n  groups(first: 3) {\n    edges {\n      node {\n        id\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "9ed03d6338dd0d0dc903bd5070383e5b";

export default node;
