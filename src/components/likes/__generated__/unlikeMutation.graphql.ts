/**
 * @generated SignedSource<<41955b0ddfbffa4ccdd9ee98712f4887>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DestroyLikeInput = {
  clientMutationId?: string | null | undefined;
  likeableId: string;
};
export type unlikeMutation$variables = {
  input: DestroyLikeInput;
};
export type unlikeMutation$data = {
  readonly destroyLike: {
    readonly errors: ReadonlyArray<string>;
    readonly like: {
      readonly id: string;
      readonly likeable: {
        readonly " $fragmentSpreads": FragmentRefs<"unlikeFragment">;
      };
    } | null | undefined;
  } | null | undefined;
};
export type unlikeMutation = {
  response: unlikeMutation$data;
  variables: unlikeMutation$variables;
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
    "name": "unlikeMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DestroyLikePayload",
        "kind": "LinkedField",
        "name": "destroyLike",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Like",
            "kind": "LinkedField",
            "name": "like",
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
                    "name": "unlikeFragment"
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
    "name": "unlikeMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DestroyLikePayload",
        "kind": "LinkedField",
        "name": "destroyLike",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Like",
            "kind": "LinkedField",
            "name": "like",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "filters": null,
                "handle": "deleteRecord",
                "key": "",
                "kind": "ScalarHandle",
                "name": "id"
              },
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
                            "concreteType": "Like",
                            "kind": "LinkedField",
                            "name": "currentUserLike",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/)
                            ],
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
    ]
  },
  "params": {
    "cacheID": "d07118a83a1af0078006264579b2d260",
    "id": null,
    "metadata": {},
    "name": "unlikeMutation",
    "operationKind": "mutation",
    "text": "mutation unlikeMutation(\n  $input: DestroyLikeInput!\n) {\n  destroyLike(input: $input) {\n    errors\n    like {\n      id\n      likeable {\n        __typename\n        ...unlikeFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment unlikeFragment on Node {\n  __isNode: __typename\n  __typename\n  id\n  ... on Post {\n    likesCount\n    currentUserLike {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "4e910cf9ec96f7ca72cc0f2eb6eca87c";

export default node;
