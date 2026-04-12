/**
 * @generated SignedSource<<144d6e1c8156bbc7d946813b0759733a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DestroyCommentInput = {
  clientMutationId?: string | null | undefined;
  commentId: string;
};
export type commentMenuDestroyMutation$variables = {
  input: DestroyCommentInput;
};
export type commentMenuDestroyMutation$data = {
  readonly destroyComment: {
    readonly comment: {
      readonly id: string;
    } | null | undefined;
  } | null | undefined;
};
export type commentMenuDestroyMutation = {
  response: commentMenuDestroyMutation$data;
  variables: commentMenuDestroyMutation$variables;
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
    "name": "commentMenuDestroyMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DestroyCommentPayload",
        "kind": "LinkedField",
        "name": "destroyComment",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Comment",
            "kind": "LinkedField",
            "name": "comment",
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
    "name": "commentMenuDestroyMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DestroyCommentPayload",
        "kind": "LinkedField",
        "name": "destroyComment",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Comment",
            "kind": "LinkedField",
            "name": "comment",
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
    "cacheID": "613a96363dee1fdae7607cd710b7116d",
    "id": null,
    "metadata": {},
    "name": "commentMenuDestroyMutation",
    "operationKind": "mutation",
    "text": "mutation commentMenuDestroyMutation(\n  $input: DestroyCommentInput!\n) {\n  destroyComment(input: $input) {\n    comment {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e59ea7281e2878522a2bd14975680782";

export default node;
