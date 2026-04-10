/**
 * @generated SignedSource<<392f60dab2749e7ab03e0952351f7f1e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DestroyPostInput = {
  clientMutationId?: string | null | undefined;
  postId: string;
};
export type postMenuDestroyMutation$variables = {
  input: DestroyPostInput;
};
export type postMenuDestroyMutation$data = {
  readonly destroyPost: {
    readonly post: {
      readonly id: string;
    } | null | undefined;
  } | null | undefined;
};
export type postMenuDestroyMutation = {
  response: postMenuDestroyMutation$data;
  variables: postMenuDestroyMutation$variables;
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "postMenuDestroyMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DestroyPostPayload",
        "kind": "LinkedField",
        "name": "destroyPost",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Post",
            "kind": "LinkedField",
            "name": "post",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "postMenuDestroyMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DestroyPostPayload",
        "kind": "LinkedField",
        "name": "destroyPost",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Post",
            "kind": "LinkedField",
            "name": "post",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "filters": null,
                "handle": "deleteRecord",
                "key": "",
                "kind": "ScalarHandle",
                "name": "id"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9126d9a5fde0310415e5906b10933672",
    "id": null,
    "metadata": {},
    "name": "postMenuDestroyMutation",
    "operationKind": "mutation",
    "text": "mutation postMenuDestroyMutation(\n  $input: DestroyPostInput!\n) {\n  destroyPost(input: $input) {\n    post {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "2167c2bd8de9b0f754b2f82895ce93c2";

export default node;
