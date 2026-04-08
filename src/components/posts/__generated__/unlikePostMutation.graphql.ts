/**
 * @generated SignedSource<<0d3e79d067447faaea950e4daa3e4407>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DestroyLikeInput = {
  clientMutationId?: string | null | undefined;
  likeableId: string;
};
export type unlikePostMutation$variables = {
  input: DestroyLikeInput;
};
export type unlikePostMutation$data = {
  readonly destroyLike: {
    readonly errors: ReadonlyArray<string>;
    readonly like: {
      readonly id: string;
      readonly likeable: {
        readonly id?: string;
        readonly isLikedByCurrentUser?: boolean;
      };
    } | null | undefined;
  } | null | undefined;
};
export type unlikePostMutation = {
  response: unlikePostMutation$data;
  variables: unlikePostMutation$variables;
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
    "name": "unlikePostMutation",
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
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "unlikePostMutation",
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
    ]
  },
  "params": {
    "cacheID": "948017fa7061e191641aa26d40539bee",
    "id": null,
    "metadata": {},
    "name": "unlikePostMutation",
    "operationKind": "mutation",
    "text": "mutation unlikePostMutation(\n  $input: DestroyLikeInput!\n) {\n  destroyLike(input: $input) {\n    errors\n    like {\n      id\n      likeable {\n        __typename\n        ... on Post {\n          id\n          isLikedByCurrentUser\n        }\n        ... on Node {\n          __isNode: __typename\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "cec88e511b5d83eb96010308f60be889";

export default node;
