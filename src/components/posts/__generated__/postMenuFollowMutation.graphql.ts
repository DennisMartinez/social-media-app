/**
 * @generated SignedSource<<5e6c7ace9d400f41ede7fec5a6ac88db>>
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
export type postMenuFollowMutation$variables = {
  input: FollowUserInput;
};
export type postMenuFollowMutation$data = {
  readonly followUser: {
    readonly errors: ReadonlyArray<string>;
    readonly followedUser: {
      readonly id: string;
      readonly viewerIsFollowing: boolean;
    } | null | undefined;
  } | null | undefined;
};
export type postMenuFollowMutation = {
  response: postMenuFollowMutation$data;
  variables: postMenuFollowMutation$variables;
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
    "name": "postMenuFollowMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "postMenuFollowMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f29645d81e699ad466b42a178a6f6239",
    "id": null,
    "metadata": {},
    "name": "postMenuFollowMutation",
    "operationKind": "mutation",
    "text": "mutation postMenuFollowMutation(\n  $input: FollowUserInput!\n) {\n  followUser(input: $input) {\n    errors\n    followedUser {\n      id\n      viewerIsFollowing\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "8091d1bfd2ba5a13280cb50e07ab47c5";

export default node;
