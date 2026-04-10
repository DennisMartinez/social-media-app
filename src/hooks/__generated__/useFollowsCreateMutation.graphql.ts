/**
 * @generated SignedSource<<37c25854d5519a1c2f9b46f967e9719b>>
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
    "cacheID": "901bfbd1c0bf858a7b955714515e60ac",
    "id": null,
    "metadata": {},
    "name": "useFollowsCreateMutation",
    "operationKind": "mutation",
    "text": "mutation useFollowsCreateMutation(\n  $input: FollowUserInput!\n) {\n  followUser(input: $input) {\n    errors\n    followedUser {\n      id\n      viewerIsFollowing\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "dcdbc997b5e80afafa8e4a24e0f2c564";

export default node;
