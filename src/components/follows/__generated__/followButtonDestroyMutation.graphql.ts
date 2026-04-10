/**
 * @generated SignedSource<<5c24546ebffebfb6cfc77f357b853f9f>>
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
export type followButtonDestroyMutation$variables = {
  input: UnfollowUserInput;
};
export type followButtonDestroyMutation$data = {
  readonly unfollowUser: {
    readonly errors: ReadonlyArray<string>;
    readonly unfollowedUser: {
      readonly id: string;
      readonly isFollowing: boolean;
    };
  } | null | undefined;
};
export type followButtonDestroyMutation = {
  response: followButtonDestroyMutation$data;
  variables: followButtonDestroyMutation$variables;
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
    "name": "followButtonDestroyMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "followButtonDestroyMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c98dd1f9342e50d017e11379482a2efb",
    "id": null,
    "metadata": {},
    "name": "followButtonDestroyMutation",
    "operationKind": "mutation",
    "text": "mutation followButtonDestroyMutation(\n  $input: UnfollowUserInput!\n) {\n  unfollowUser(input: $input) {\n    errors\n    unfollowedUser {\n      id\n      isFollowing\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a5af0aacb50442b5a30e1ff3ed72d373";

export default node;
