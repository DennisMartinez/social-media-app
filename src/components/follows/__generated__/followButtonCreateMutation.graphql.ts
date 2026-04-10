/**
 * @generated SignedSource<<2f1c98e39d58af8b5a625b912dce6769>>
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
export type followButtonCreateMutation$variables = {
  input: FollowUserInput;
};
export type followButtonCreateMutation$data = {
  readonly followUser: {
    readonly errors: ReadonlyArray<string>;
    readonly followedUser: {
      readonly id: string;
      readonly isFollowing: boolean;
    } | null | undefined;
  } | null | undefined;
};
export type followButtonCreateMutation = {
  response: followButtonCreateMutation$data;
  variables: followButtonCreateMutation$variables;
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
    "name": "followButtonCreateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "followButtonCreateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "361aa8854ac1c8e226accf116b2de702",
    "id": null,
    "metadata": {},
    "name": "followButtonCreateMutation",
    "operationKind": "mutation",
    "text": "mutation followButtonCreateMutation(\n  $input: FollowUserInput!\n) {\n  followUser(input: $input) {\n    errors\n    followedUser {\n      id\n      isFollowing\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d58a508a80734b2ca23a347533f4e089";

export default node;
