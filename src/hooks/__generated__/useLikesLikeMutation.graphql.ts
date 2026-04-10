/**
 * @generated SignedSource<<17c72a29fb1e9d54aa04dd7a8b5e87d1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateLikeInput = {
  clientMutationId?: string | null | undefined;
  likeableId: string;
};
export type useLikesLikeMutation$variables = {
  input: CreateLikeInput;
};
export type useLikesLikeMutation$data = {
  readonly createLike: {
    readonly errors: ReadonlyArray<string>;
    readonly likeEdge: {
      readonly node: {
        readonly id: string;
        readonly likeable: {
          readonly " $fragmentSpreads": FragmentRefs<"useLikesFragment">;
        };
      } | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type useLikesLikeMutation = {
  response: useLikesLikeMutation$data;
  variables: useLikesLikeMutation$variables;
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useLikesLikeMutation",
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
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "useLikesFragment"
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
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useLikesLikeMutation",
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
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v3/*: any*/),
                          {
                            "kind": "InlineFragment",
                            "selections": [
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
                                "kind": "ScalarField",
                                "name": "viewerHasLiked",
                                "storageKey": null
                              }
                            ],
                            "type": "Post",
                            "abstractKey": null
                          }
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
    "cacheID": "59026b8c098728f998581d9f718e90b3",
    "id": null,
    "metadata": {},
    "name": "useLikesLikeMutation",
    "operationKind": "mutation",
    "text": "mutation useLikesLikeMutation(\n  $input: CreateLikeInput!\n) {\n  createLike(input: $input) {\n    errors\n    likeEdge {\n      node {\n        id\n        likeable {\n          __typename\n          ...useLikesFragment\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment useLikesFragment on Node {\n  __isNode: __typename\n  __typename\n  id\n  ... on Post {\n    likesCount\n    viewerHasLiked\n  }\n}\n"
  }
};
})();

(node as any).hash = "dc8273e675e1d90fdcf60cf755ff9f76";

export default node;
