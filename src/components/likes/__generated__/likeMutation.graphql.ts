/**
 * @generated SignedSource<<6bb487d491ef74081d65f0c815bf9c22>>
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
export type likeMutation$variables = {
  input: CreateLikeInput;
};
export type likeMutation$data = {
  readonly createLike: {
    readonly errors: ReadonlyArray<string>;
    readonly likeEdge: {
      readonly node: {
        readonly id: string;
        readonly likeable: {
          readonly currentUserLike?: {
            readonly id: string;
          } | null | undefined;
          readonly id?: string;
          readonly likesCount?: number;
        };
      } | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type likeMutation = {
  response: likeMutation$data;
  variables: likeMutation$variables;
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
v4 = [
  (v3/*: any*/)
],
v5 = {
  "kind": "InlineFragment",
  "selections": [
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "likesCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Like",
      "kind": "LinkedField",
      "name": "currentUserLike",
      "plural": false,
      "selections": (v4/*: any*/),
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
    "name": "likeMutation",
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
                      (v5/*: any*/)
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
    "name": "likeMutation",
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
                      (v5/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": (v4/*: any*/),
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
    "cacheID": "483744df72998ec472bdbe46bd11b98c",
    "id": null,
    "metadata": {},
    "name": "likeMutation",
    "operationKind": "mutation",
    "text": "mutation likeMutation(\n  $input: CreateLikeInput!\n) {\n  createLike(input: $input) {\n    errors\n    likeEdge {\n      node {\n        id\n        likeable {\n          __typename\n          ... on Post {\n            id\n            likesCount\n            currentUserLike {\n              id\n            }\n          }\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "a58a44281497103a8254d9f8b4bb7cd4";

export default node;
