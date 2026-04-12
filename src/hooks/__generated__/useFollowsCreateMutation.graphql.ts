/**
 * @generated SignedSource<<5731c03ddd3d946dab055add9ffdbcf5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type FollowUserInput = {
  clientMutationId?: string | null | undefined;
  userId: string;
};
export type useFollowsCreateMutation$variables = {
  input: FollowUserInput;
};
export type useFollowsCreateMutation$data = {
  readonly followUser: {
    readonly errors: ReadonlyArray<string>;
    readonly followee: {
      readonly followerCount: number;
      readonly followingCount: number;
      readonly id: string;
      readonly viewerIsFollowing: boolean;
    } | null | undefined;
    readonly follower: {
      readonly followerCount: number;
      readonly followingCount: number;
    } | null | undefined;
  } | null | undefined;
};
export type useFollowsCreateMutation = {
  response: useFollowsCreateMutation$data;
  variables: useFollowsCreateMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "errors",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "followerCount",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "followingCount",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "followee",
  "plural": false,
  "selections": [
    (v5/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "viewerIsFollowing",
      "storageKey": null
    },
    (v3/*: any*/),
    (v4/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useFollowsCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "FollowUserPayload",
        "kind": "LinkedField",
        "name": "followUser",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "follower",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useFollowsCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "FollowUserPayload",
        "kind": "LinkedField",
        "name": "followUser",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "follower",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0f1cc52be82719fa127a6184f42ef3a9",
    "id": null,
    "metadata": {},
    "name": "useFollowsCreateMutation",
    "operationKind": "mutation",
    "text": "mutation useFollowsCreateMutation(\n  $input: FollowUserInput!\n) {\n  followUser(input: $input) {\n    errors\n    follower {\n      followerCount\n      followingCount\n      id\n    }\n    followee {\n      id\n      viewerIsFollowing\n      followerCount\n      followingCount\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a89b272ff147e5d065bf7bd4a258d3fb";

export default node;
