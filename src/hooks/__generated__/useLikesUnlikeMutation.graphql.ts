/**
 * @generated SignedSource<<f6e0f51182e4d6ab6df5f2bf594b64c8>>
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
export type useLikesUnlikeMutation$variables = {
  input: DestroyLikeInput;
};
export type useLikesUnlikeMutation$data = {
  readonly destroyLike: {
    readonly errors: ReadonlyArray<string>;
    readonly like: {
      readonly id: string;
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
              (v3/*: any*/)
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
    "cacheID": "f21f947e1a62e7182836726eb7087a7b",
    "id": null,
    "metadata": {},
    "name": "useLikesUnlikeMutation",
    "operationKind": "mutation",
    "text": "mutation useLikesUnlikeMutation(\n  $input: DestroyLikeInput!\n) {\n  destroyLike(input: $input) {\n    errors\n    like {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "5a9072314145b80f72b87077ee38ebb1";

export default node;
