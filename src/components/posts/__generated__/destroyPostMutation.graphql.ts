/**
 * @generated SignedSource<<b20687f198aba4d5cc482a3d472b501a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type destroyPostMutation$variables = {
  postId: string;
};
export type destroyPostMutation$data = {
  readonly destroyPost: {
    readonly post: {
      readonly id: string;
    } | null | undefined;
  } | null | undefined;
};
export type destroyPostMutation = {
  response: destroyPostMutation$data;
  variables: destroyPostMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "postId"
  }
],
v1 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "postId",
        "variableName": "postId"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
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
    "name": "destroyPostMutation",
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
    "name": "destroyPostMutation",
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
    "cacheID": "452ce445f2a2825a5b64b5c31dda44c6",
    "id": null,
    "metadata": {},
    "name": "destroyPostMutation",
    "operationKind": "mutation",
    "text": "mutation destroyPostMutation(\n  $postId: ID!\n) {\n  destroyPost(input: {postId: $postId}) {\n    post {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "489ced38304c4d43e6a881a1c1139c1a";

export default node;
