/**
 * @generated SignedSource<<04b95ac35620cfb40b9665ba48c866bb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type CreateCommentInput = {
  clientMutationId?: string | null | undefined;
  commentableId: string;
  content: string;
};
export type createCommentFormMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateCommentInput;
};
export type createCommentFormMutation$data = {
  readonly createComment: {
    readonly commentEdge: {
      readonly node: {
        readonly content: string;
        readonly createdAt: any;
        readonly id: string;
      } | null | undefined;
    } | null | undefined;
    readonly errors: ReadonlyArray<string>;
  } | null | undefined;
};
export type createCommentFormMutation = {
  response: createCommentFormMutation$data;
  variables: createCommentFormMutation$variables;
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
  "kind": "ScalarField",
  "name": "errors",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "CommentEdge",
  "kind": "LinkedField",
  "name": "commentEdge",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Comment",
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
    "name": "createCommentFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCommentPayload",
        "kind": "LinkedField",
        "name": "createComment",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
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
    "name": "createCommentFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCommentPayload",
        "kind": "LinkedField",
        "name": "createComment",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "commentEdge",
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
    "cacheID": "cbab2b0fbf7e09f6d868b578b82d4f6c",
    "id": null,
    "metadata": {},
    "name": "createCommentFormMutation",
    "operationKind": "mutation",
    "text": "mutation createCommentFormMutation(\n  $input: CreateCommentInput!\n) {\n  createComment(input: $input) {\n    errors\n    commentEdge {\n      node {\n        id\n        content\n        createdAt\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "25b91fcfb31a6a9f3f1fe24b05035cb7";

export default node;
