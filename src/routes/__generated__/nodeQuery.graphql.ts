/**
 * @generated SignedSource<<97154a5235d60fa01f69bf6d770d7468>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type nodeQuery$variables = {
  id: string;
};
export type nodeQuery$data = {
  readonly node: {
    readonly __typename: string;
    readonly id: string;
    readonly viewerIsMember?: boolean;
    readonly " $fragmentSpreads": FragmentRefs<"createPostFormGroupFragment" | "followersCardFragment" | "followingsCardFragment" | "groupMembersCardFragment" | "groupPostListFragment" | "profileHeaderFragment" | "userGroupsCardFragment" | "userPostListFragment">;
  } | null | undefined;
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"createPostFormFragment" | "followersCardViewerFragment" | "followingsCardViewerFragment" | "groupMembersCardViewerFragment" | "groupPostListViewerFragment" | "profileHeaderViewerFragment" | "userGroupsCardViewerFragment" | "userPostListViewerFragment">;
  };
  readonly " $fragmentSpreads": FragmentRefs<"navigationFragment">;
};
export type nodeQuery = {
  response: nodeQuery$data;
  variables: nodeQuery$variables;
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
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "viewerIsMember",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "followerCount",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "followingCount",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "groupCount",
  "storageKey": null
},
v10 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 3
  }
],
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v12 = {
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
v13 = {
  "alias": null,
  "args": (v10/*: any*/),
  "filters": null,
  "handle": "connection",
  "key": "User_groups",
  "kind": "LinkedHandle",
  "name": "groups"
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v15 = {
  "kind": "InlineFragment",
  "selections": [
    (v2/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bio",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "viewerIsFollowing",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "viewerCanFollow",
  "storageKey": null
},
v19 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 5
  }
],
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v21 = [
  (v6/*: any*/)
],
v22 = {
  "kind": "InlineFragment",
  "selections": (v21/*: any*/),
  "type": "User",
  "abstractKey": null
},
v23 = {
  "kind": "InlineFragment",
  "selections": (v21/*: any*/),
  "type": "Group",
  "abstractKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "viewerCanDestroy",
  "storageKey": null
},
v26 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  }
],
v27 = {
  "alias": null,
  "args": (v19/*: any*/),
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
            (v20/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "Group",
              "kind": "LinkedField",
              "name": "group",
              "plural": false,
              "selections": [
                (v3/*: any*/),
                (v5/*: any*/)
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
                (v3/*: any*/),
                (v5/*: any*/),
                (v17/*: any*/),
                (v18/*: any*/),
                (v7/*: any*/),
                (v8/*: any*/),
                {
                  "kind": "InlineFragment",
                  "selections": [
                    (v2/*: any*/),
                    (v22/*: any*/),
                    (v23/*: any*/)
                  ],
                  "type": "Node",
                  "abstractKey": "__isNode"
                }
              ],
              "storageKey": null
            },
            (v24/*: any*/),
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
            (v25/*: any*/),
            (v2/*: any*/),
            {
              "kind": "InlineFragment",
              "selections": [
                {
                  "kind": "InlineFragment",
                  "selections": [
                    {
                      "alias": null,
                      "args": (v26/*: any*/),
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
                                (v20/*: any*/),
                                {
                                  "alias": null,
                                  "args": null,
                                  "concreteType": "User",
                                  "kind": "LinkedField",
                                  "name": "user",
                                  "plural": false,
                                  "selections": [
                                    (v3/*: any*/),
                                    (v5/*: any*/),
                                    (v6/*: any*/),
                                    (v15/*: any*/)
                                  ],
                                  "storageKey": null
                                },
                                (v25/*: any*/),
                                (v24/*: any*/),
                                (v2/*: any*/)
                              ],
                              "storageKey": null
                            },
                            (v11/*: any*/)
                          ],
                          "storageKey": null
                        },
                        (v12/*: any*/)
                      ],
                      "storageKey": "comments(first:1)"
                    },
                    {
                      "alias": null,
                      "args": (v26/*: any*/),
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
                        (v3/*: any*/)
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
        (v11/*: any*/)
      ],
      "storageKey": null
    },
    (v12/*: any*/)
  ],
  "storageKey": "posts(first:5)"
},
v28 = {
  "kind": "InlineFragment",
  "selections": [
    (v22/*: any*/),
    (v23/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v29 = [
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
          (v5/*: any*/),
          (v14/*: any*/),
          (v17/*: any*/),
          (v18/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v2/*: any*/),
          (v28/*: any*/)
        ],
        "storageKey": null
      },
      (v11/*: any*/)
    ],
    "storageKey": null
  },
  (v12/*: any*/)
],
v30 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "memberCount",
  "storageKey": null
},
v31 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "viewerCanJoin",
  "storageKey": null
},
v32 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "viewerCanLeave",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "nodeQuery",
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
            "name": "createPostFormFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "groupPostListViewerFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "groupMembersCardViewerFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "userPostListViewerFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "userGroupsCardViewerFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "profileHeaderViewerFragment"
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
          }
        ],
        "storageKey": null
      },
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "profileHeaderFragment"
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "userPostListFragment"
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
                "name": "userGroupsCardFragment"
              }
            ],
            "type": "User",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v4/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "groupPostListFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "groupMembersCardFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "createPostFormGroupFragment"
              }
            ],
            "type": "Group",
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
    "name": "nodeQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          {
            "alias": null,
            "args": (v10/*: any*/),
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
                      (v3/*: any*/),
                      (v5/*: any*/),
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v11/*: any*/)
                ],
                "storageKey": null
              },
              (v12/*: any*/)
            ],
            "storageKey": "groups(first:3)"
          },
          (v13/*: any*/),
          (v14/*: any*/),
          (v15/*: any*/)
        ],
        "storageKey": null
      },
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
            "kind": "TypeDiscriminator",
            "abstractKey": "__isNode"
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v5/*: any*/),
              (v14/*: any*/),
              (v16/*: any*/),
              (v17/*: any*/),
              (v18/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v27/*: any*/),
              {
                "alias": null,
                "args": (v19/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "UserPostList_posts",
                "kind": "LinkedHandle",
                "name": "posts"
              },
              {
                "alias": null,
                "args": (v10/*: any*/),
                "concreteType": "UserConnection",
                "kind": "LinkedField",
                "name": "followers",
                "plural": false,
                "selections": (v29/*: any*/),
                "storageKey": "followers(first:3)"
              },
              {
                "alias": null,
                "args": (v10/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "User_followers",
                "kind": "LinkedHandle",
                "name": "followers"
              },
              {
                "alias": null,
                "args": (v10/*: any*/),
                "concreteType": "UserConnection",
                "kind": "LinkedField",
                "name": "following",
                "plural": false,
                "selections": (v29/*: any*/),
                "storageKey": "following(first:3)"
              },
              {
                "alias": null,
                "args": (v10/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "User_following",
                "kind": "LinkedHandle",
                "name": "following"
              },
              (v9/*: any*/),
              {
                "alias": null,
                "args": (v10/*: any*/),
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
                          (v3/*: any*/),
                          (v5/*: any*/),
                          (v16/*: any*/),
                          (v30/*: any*/),
                          (v31/*: any*/),
                          (v32/*: any*/),
                          (v4/*: any*/),
                          (v2/*: any*/),
                          (v28/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v11/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v12/*: any*/)
                ],
                "storageKey": "groups(first:3)"
              },
              (v13/*: any*/),
              (v28/*: any*/)
            ],
            "type": "User",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v5/*: any*/),
              (v16/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "owner",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              },
              (v30/*: any*/),
              (v31/*: any*/),
              (v32/*: any*/),
              (v4/*: any*/),
              (v27/*: any*/),
              {
                "alias": null,
                "args": (v19/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "GroupPostList_posts",
                "kind": "LinkedHandle",
                "name": "posts"
              },
              {
                "alias": null,
                "args": (v10/*: any*/),
                "concreteType": "UserConnection",
                "kind": "LinkedField",
                "name": "members",
                "plural": false,
                "selections": (v29/*: any*/),
                "storageKey": "members(first:3)"
              },
              {
                "alias": null,
                "args": (v10/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "Group_members",
                "kind": "LinkedHandle",
                "name": "members"
              },
              (v28/*: any*/)
            ],
            "type": "Group",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "eea9eeed822961eb9d2152cff082aff8",
    "id": null,
    "metadata": {},
    "name": "nodeQuery",
    "operationKind": "query",
    "text": "query nodeQuery(\n  $id: ID!\n) {\n  viewer {\n    ...createPostFormFragment\n    ...groupPostListViewerFragment\n    ...groupMembersCardViewerFragment\n    ...userPostListViewerFragment\n    ...userGroupsCardViewerFragment\n    ...profileHeaderViewerFragment\n    ...followersCardViewerFragment\n    ...followingsCardViewerFragment\n    id\n  }\n  node(id: $id) {\n    __typename\n    id\n    ...profileHeaderFragment\n    ... on User {\n      ...userPostListFragment\n      ...followersCardFragment\n      ...followingsCardFragment\n      ...userGroupsCardFragment\n    }\n    ... on Group {\n      viewerIsMember\n      ...groupPostListFragment\n      ...groupMembersCardFragment\n      ...createPostFormGroupFragment\n    }\n  }\n  ...navigationFragment\n}\n\nfragment commentContentFragment on Comment {\n  content\n}\n\nfragment commentFragment on Comment {\n  id\n  createdAt\n  user {\n    id\n    name\n    avatarUrl\n    ...profileAvatarFragment\n  }\n  ...commentMenuFragment\n  ...commentContentFragment\n}\n\nfragment commentListFragment on Node {\n  __isNode: __typename\n  ... on Post {\n    comments(first: 1) {\n      edges {\n        node {\n          id\n          ...commentFragment\n          __typename\n        }\n        cursor\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n  id\n}\n\nfragment commentMenuFragment on Comment {\n  id\n  viewerCanDestroy\n}\n\nfragment createCommentFormCommentableFragment on Node {\n  __isNode: __typename\n  __typename\n  id\n  ... on Post {\n    commentsCount\n  }\n}\n\nfragment createCommentFormViewerFragment on User {\n  id\n  name\n  avatarUrl\n  ...profileAvatarFragment\n}\n\nfragment createPostFormFragment on User {\n  id\n  name\n  avatarUrl\n  followerCount\n  followingCount\n  ...profileAvatarFragment\n  ...userGroupsDropdownFragment\n}\n\nfragment createPostFormGroupFragment on Group {\n  id\n  name\n}\n\nfragment followButtonFolloweeFragment on User {\n  id\n  viewerIsFollowing\n  viewerCanFollow\n  ...useFollowsFolloweeFragment\n}\n\nfragment followButtonFollowerFragment on User {\n  ...useFollowsFollowerFragment\n}\n\nfragment followeeFragment on User {\n  id\n  name\n  email\n  ...followButtonFolloweeFragment\n  ...profileAvatarFragment\n}\n\nfragment followeeViewerFragment on User {\n  ...followButtonFollowerFragment\n}\n\nfragment followersCardFragment on User {\n  followerCount\n  followers(first: 3) {\n    edges {\n      node {\n        id\n        ...followeeFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment followersCardViewerFragment on User {\n  ...followeeViewerFragment\n}\n\nfragment followingsCardFragment on User {\n  followingCount\n  following(first: 3) {\n    edges {\n      node {\n        id\n        ...followeeFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment followingsCardViewerFragment on User {\n  ...followeeViewerFragment\n}\n\nfragment groupBadgeFragment on Group {\n  id\n  name\n  bio\n  ...profileAvatarFragment\n  ...groupMembershipButtonFragment\n}\n\nfragment groupBadgeViewerFragment on User {\n  groupCount\n  ...groupMembershipButtonViewerFragment\n}\n\nfragment groupMembersCardFragment on Group {\n  memberCount\n  members(first: 3) {\n    edges {\n      node {\n        id\n        ...followeeFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment groupMembersCardViewerFragment on User {\n  ...followeeViewerFragment\n}\n\nfragment groupMembershipButtonFragment on Group {\n  id\n  memberCount\n  viewerCanJoin\n  viewerCanLeave\n  viewerIsMember\n}\n\nfragment groupMembershipButtonViewerFragment on User {\n  id\n  groupCount\n}\n\nfragment groupPostListFragment on Group {\n  posts(first: 5) {\n    edges {\n      node {\n        id\n        ...postFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment groupPostListViewerFragment on User {\n  ...postViewerFragment\n}\n\nfragment navigationAccountFragment on User {\n  id\n  name\n  email\n  ...profileAvatarFragment\n}\n\nfragment navigationFragment on Query {\n  viewer {\n    ...navigationMainFragment\n    ...navigationAccountFragment\n    id\n  }\n}\n\nfragment navigationMainFragment on User {\n  id\n}\n\nfragment postContentFragment on Post {\n  content\n}\n\nfragment postFragment on Post {\n  id\n  ...postUserFragment\n  ...postContentFragment\n  ...createCommentFormCommentableFragment\n  ...commentListFragment\n  ...postStatsFragment\n  ...postMenuFragment\n}\n\nfragment postMenuFragment on Post {\n  id\n  viewerHasLiked\n  viewerCanDestroy\n  user {\n    id\n    viewerIsFollowing\n    viewerCanFollow\n    ...useFollowsFolloweeFragment\n  }\n  ...useLikesLikeableFragment\n}\n\nfragment postMenuViewerFragment on User {\n  ...useFollowsFollowerFragment\n}\n\nfragment postStatsFragment on Post {\n  id\n  likesCount\n  commentsCount\n  viewerHasLiked\n  ...useLikesLikeableFragment\n}\n\nfragment postUserFragment on Post {\n  createdAt\n  group {\n    id\n    name\n  }\n  user {\n    id\n    name\n    ...profileAvatarFragment\n  }\n}\n\nfragment postViewerFragment on User {\n  name\n  ...createCommentFormViewerFragment\n  ...postMenuViewerFragment\n}\n\nfragment profileAvatarFragment on Node {\n  __isNode: __typename\n  __typename\n  ... on User {\n    name\n    avatarUrl\n  }\n  ... on Group {\n    name\n    avatarUrl\n  }\n}\n\nfragment profileHeaderFragment on Node {\n  __isNode: __typename\n  __typename\n  id\n  ... on User {\n    name\n    email\n    bio\n    ...profileAvatarFragment\n    ...followButtonFolloweeFragment\n  }\n  ... on Group {\n    name\n    bio\n    owner {\n      name\n      id\n    }\n    ...profileAvatarFragment\n    ...groupMembershipButtonFragment\n  }\n}\n\nfragment profileHeaderViewerFragment on User {\n  ...followButtonFollowerFragment\n  ...groupMembershipButtonViewerFragment\n}\n\nfragment useFollowsFolloweeFragment on User {\n  id\n  followerCount\n  followingCount\n}\n\nfragment useFollowsFollowerFragment on User {\n  id\n  followerCount\n  followingCount\n}\n\nfragment useLikesLikeableFragment on Node {\n  __isNode: __typename\n  __typename\n  id\n  ... on Post {\n    likesCount\n    viewerHasLiked\n    viewerLike {\n      id\n    }\n  }\n}\n\nfragment userGroupsCardFragment on User {\n  groupCount\n  groups(first: 3) {\n    edges {\n      node {\n        id\n        ...groupBadgeFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment userGroupsCardViewerFragment on User {\n  ...groupBadgeViewerFragment\n}\n\nfragment userGroupsDropdownFragment on User {\n  groupCount\n  groups(first: 3) {\n    edges {\n      node {\n        id\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment userPostListFragment on User {\n  posts(first: 5) {\n    edges {\n      node {\n        id\n        ...postFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment userPostListViewerFragment on User {\n  ...postViewerFragment\n}\n"
  }
};
})();

(node as any).hash = "8b150e85fd886a9117fbcfc6a582be0f";

export default node;
