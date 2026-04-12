/**
 * @generated SignedSource<<1426d396d8c0872d1c8969504a47b372>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type UnfollowUserInput = {
  clientMutationId?: string | null | undefined;
  userId: string;
};
export type useFollowsDestroyMutation$variables = {
  input: UnfollowUserInput;
};
export type useFollowsDestroyMutation$data = {
  readonly unfollowUser: {
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
export type useFollowsDestroyMutation = {
  response: useFollowsDestroyMutation$data;
  variables: useFollowsDestroyMutation$variables;
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
    "name": "useFollowsDestroyMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UnfollowUserPayload",
        "kind": "LinkedField",
        "name": "unfollowUser",
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
    "name": "useFollowsDestroyMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UnfollowUserPayload",
        "kind": "LinkedField",
        "name": "unfollowUser",
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
    "cacheID": "a5b503cd447d71255cebe67d85b708a3",
    "id": null,
    "metadata": {},
    "name": "useFollowsDestroyMutation",
    "operationKind": "mutation",
    "text": "mutation useFollowsDestroyMutation(\n  $input: UnfollowUserInput!\n) {\n  unfollowUser(input: $input) {\n    errors\n    follower {\n      followerCount\n      followingCount\n      id\n    }\n    followee {\n      id\n      viewerIsFollowing\n      followerCount\n      followingCount\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "5861b637e806f835b5606aca45e28655";

export default node;
