/**
 * @generated SignedSource<<9f3b9e2e91466380553c4710b56b7c0e>>
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
export type unfollowUserMutation$variables = {
  input: UnfollowUserInput;
};
export type unfollowUserMutation$data = {
  readonly unfollowUser: {
    readonly errors: ReadonlyArray<string>;
    readonly unfollowedUser: {
      readonly id: string;
      readonly isFollowing: boolean;
    };
  } | null | undefined;
};
export type unfollowUserMutation = {
  response: unfollowUserMutation$data;
  variables: unfollowUserMutation$variables;
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
    "name": "unfollowUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "unfollowUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1e7ec1a5f2b2c02321ff10bee2837e95",
    "id": null,
    "metadata": {},
    "name": "unfollowUserMutation",
    "operationKind": "mutation",
    "text": "mutation unfollowUserMutation(\n  $input: UnfollowUserInput!\n) {\n  unfollowUser(input: $input) {\n    errors\n    unfollowedUser {\n      id\n      isFollowing\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "46a5958b1601b45df3969492af28290a";

export default node;
