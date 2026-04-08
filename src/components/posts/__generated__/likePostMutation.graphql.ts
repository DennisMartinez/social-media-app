/**
 * @generated SignedSource<<caae369e44e4bfb9523d7a4f5b7ee838>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type CreateLikeInput = {
  clientMutationId?: string | null | undefined;
  likeableId: string;
};
export type likePostMutation$variables = {
  input: CreateLikeInput;
};
export type likePostMutation$data = {
  readonly createLike: {
    readonly errors: ReadonlyArray<string>;
    readonly likeEdge: {
      readonly node: {
        readonly id: string;
        readonly likeable: {
          readonly id?: string;
          readonly isLikedByCurrentUser?: boolean;
        };
      } | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type likePostMutation = {
  response: likePostMutation$data;
  variables: likePostMutation$variables;
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
  "name": "errors",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "kind": "InlineFragment",
  "selections": [
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isLikedByCurrentUser",
      "storageKey": null
    }
  ],
  "type": "Post",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "likePostMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateLikePayload",
        "kind": "LinkedField",
        "name": "createLike",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "LikeEdge",
            "kind": "LinkedField",
            "name": "likeEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Like",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "likeable",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
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
    "name": "likePostMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateLikePayload",
        "kind": "LinkedField",
        "name": "createLike",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "LikeEdge",
            "kind": "LinkedField",
            "name": "likeEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Like",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "likeable",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      },
                      (v4/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v3/*: any*/)
                        ],
                        "type": "Node",
                        "abstractKey": "__isNode"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
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
    "cacheID": "84177654748c016d2a0ba500cdab21fd",
    "id": null,
    "metadata": {},
    "name": "likePostMutation",
    "operationKind": "mutation",
    "text": "mutation likePostMutation(\n  $input: CreateLikeInput!\n) {\n  createLike(input: $input) {\n    errors\n    likeEdge {\n      node {\n        id\n        likeable {\n          __typename\n          ... on Post {\n            id\n            isLikedByCurrentUser\n          }\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "cc6b4191bf969ed7ba01d2e812a4539b";

export default node;
