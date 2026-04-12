/**
 * @generated SignedSource<<88a0439c80824370b228e383ec6d7dc1>>
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
    readonly unfollowedUser: {
      readonly followerCount: number;
      readonly followingCount: number;
      readonly id: string;
      readonly viewerIsFollowing: boolean;
    };
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UnfollowUserPayload",
    "kind": "LinkedField",
    "name": "unfollowUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "errors",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "unfollowedUser",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "viewerIsFollowing",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "followerCount",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "followingCount",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useFollowsDestroyMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useFollowsDestroyMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9f76f44e0595a3fbed0618fab4328435",
    "id": null,
    "metadata": {},
    "name": "useFollowsDestroyMutation",
    "operationKind": "mutation",
    "text": "mutation useFollowsDestroyMutation(\n  $input: UnfollowUserInput!\n) {\n  unfollowUser(input: $input) {\n    errors\n    unfollowedUser {\n      id\n      viewerIsFollowing\n      followerCount\n      followingCount\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "896a7e721ec485a28f158707e304534d";

export default node;
