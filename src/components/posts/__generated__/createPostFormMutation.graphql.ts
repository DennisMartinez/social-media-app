/**
 * @generated SignedSource<<085993969f62952ebe8d55479b9c06ae>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type CreatePostInput = {
  clientMutationId?: string | null | undefined;
  content: string;
};
export type createPostFormMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreatePostInput;
};
export type createPostFormMutation$data = {
  readonly createPost: {
    readonly postEdge: {
      readonly node: {
        readonly content: string;
        readonly createdAt: any;
        readonly id: string;
      } | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type createPostFormMutation = {
  response: createPostFormMutation$data;
  variables: createPostFormMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "connections"
  },
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
  "concreteType": "PostEdge",
  "kind": "LinkedField",
  "name": "postEdge",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Post",
      "kind": "LinkedField",
      "name": "node",
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
          "name": "content",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "createdAt",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "createPostFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreatePostPayload",
        "kind": "LinkedField",
        "name": "createPost",
        "plural": false,
        "selections": [
          (v2/*: any*/)
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
    "name": "createPostFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreatePostPayload",
        "kind": "LinkedField",
        "name": "createPost",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "prependEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "postEdge",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "85554ec2c1f526e0a1cef25b6efd8005",
    "id": null,
    "metadata": {},
    "name": "createPostFormMutation",
    "operationKind": "mutation",
    "text": "mutation createPostFormMutation(\n  $input: CreatePostInput!\n) {\n  createPost(input: $input) {\n    postEdge {\n      node {\n        id\n        content\n        createdAt\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "83950a23ca0d2a81a6ac41f9351fdd30";

export default node;
