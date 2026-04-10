/**
 * @generated SignedSource<<73cb35ba709596c69e3b7d808f8abb06>>
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
export type useLikesUnlikeMutation$variables = {
  input: DestroyLikeInput;
};
export type useLikesUnlikeMutation$data = {
  readonly destroyLike: {
    readonly errors: ReadonlyArray<string>;
    readonly like: {
      readonly id: string;
      readonly likeable: {
        readonly " $fragmentSpreads": FragmentRefs<"useLikesFragment">;
      };
    } | null | undefined;
  } | null | undefined;
};
export type useLikesUnlikeMutation = {
  response: useLikesUnlikeMutation$data;
  variables: useLikesUnlikeMutation$variables;
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
    "name": "useLikesUnlikeMutation",
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
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useLikesUnlikeMutation",
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
    ]
  },
  "params": {
    "cacheID": "49335171c4661e3c3d9e818dff3aa711",
    "id": null,
    "metadata": {},
    "name": "useLikesUnlikeMutation",
    "operationKind": "mutation",
    "text": "mutation useLikesUnlikeMutation(\n  $input: DestroyLikeInput!\n) {\n  destroyLike(input: $input) {\n    errors\n    like {\n      id\n      likeable {\n        __typename\n        ...useLikesFragment\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment useLikesFragment on Node {\n  __isNode: __typename\n  __typename\n  id\n  ... on Post {\n    likesCount\n    viewerHasLiked\n  }\n}\n"
  }
};
})();

(node as any).hash = "9bb8728556f75a45c4f1ef3694bd6a57";

export default node;
