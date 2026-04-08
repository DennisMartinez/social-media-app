/**
 * @generated SignedSource<<684d2374fb62d6222cfbfcaae63f4b21>>
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
export type followUserMutation$variables = {
  input: FollowUserInput;
};
export type followUserMutation$data = {
  readonly followUser: {
    readonly errors: ReadonlyArray<string>;
    readonly followedUser: {
      readonly id: string;
      readonly isFollowing: boolean;
    } | null | undefined;
  } | null | undefined;
};
export type followUserMutation = {
  response: followUserMutation$data;
  variables: followUserMutation$variables;
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
            "name": "isFollowing",
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
    "name": "followUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "followUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4078833965198235eaa008ad58955022",
    "id": null,
    "metadata": {},
    "name": "followUserMutation",
    "operationKind": "mutation",
    "text": "mutation followUserMutation(\n  $input: FollowUserInput!\n) {\n  followUser(input: $input) {\n    errors\n    followedUser {\n      id\n      isFollowing\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "9e01ea93b8ce9373ee938a3fe0a0847e";

export default node;
