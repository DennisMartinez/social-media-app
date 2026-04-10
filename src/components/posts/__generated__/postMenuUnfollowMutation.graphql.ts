/**
 * @generated SignedSource<<54bf223793ff245a9f937f2786dd1afe>>
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
export type postMenuUnfollowMutation$variables = {
  input: UnfollowUserInput;
};
export type postMenuUnfollowMutation$data = {
  readonly unfollowUser: {
    readonly errors: ReadonlyArray<string>;
    readonly unfollowedUser: {
      readonly id: string;
      readonly viewerIsFollowing: boolean;
    };
  } | null | undefined;
};
export type postMenuUnfollowMutation = {
  response: postMenuUnfollowMutation$data;
  variables: postMenuUnfollowMutation$variables;
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
    "name": "postMenuUnfollowMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "postMenuUnfollowMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "66ad22b0f1ed902f5ffaa93db4fa47e6",
    "id": null,
    "metadata": {},
    "name": "postMenuUnfollowMutation",
    "operationKind": "mutation",
    "text": "mutation postMenuUnfollowMutation(\n  $input: UnfollowUserInput!\n) {\n  unfollowUser(input: $input) {\n    errors\n    unfollowedUser {\n      id\n      viewerIsFollowing\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "7ccea8d8753663c5b642d5c1b7a3a234";

export default node;
