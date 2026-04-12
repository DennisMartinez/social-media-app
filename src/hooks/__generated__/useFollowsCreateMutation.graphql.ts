/**
 * @generated SignedSource<<119d3ea4571a96142b0544eb076b4224>>
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
    readonly followedUser: {
      readonly followerCount: number;
      readonly followingCount: number;
      readonly id: string;
      readonly viewerIsFollowing: boolean;
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "FollowUserPayload",
    "kind": "LinkedField",
    "name": "followUser",
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
        "name": "followedUser",
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
    "name": "useFollowsCreateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useFollowsCreateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5e92eb212b87d7bd4c09ff50dae90283",
    "id": null,
    "metadata": {},
    "name": "useFollowsCreateMutation",
    "operationKind": "mutation",
    "text": "mutation useFollowsCreateMutation(\n  $input: FollowUserInput!\n) {\n  followUser(input: $input) {\n    errors\n    followedUser {\n      id\n      viewerIsFollowing\n      followerCount\n      followingCount\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f3870826f43bd501b2b0b401b6d44923";

export default node;
