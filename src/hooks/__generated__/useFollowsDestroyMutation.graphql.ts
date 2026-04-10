/**
 * @generated SignedSource<<1c4847c5982685d7d8ec19e5113d0e99>>
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
    "cacheID": "52d3fe1de16a1b67a61a2b46dfda0813",
    "id": null,
    "metadata": {},
    "name": "useFollowsDestroyMutation",
    "operationKind": "mutation",
    "text": "mutation useFollowsDestroyMutation(\n  $input: UnfollowUserInput!\n) {\n  unfollowUser(input: $input) {\n    errors\n    unfollowedUser {\n      id\n      viewerIsFollowing\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a076323a1a34e30fdba8e382f8b8b7f9";

export default node;
