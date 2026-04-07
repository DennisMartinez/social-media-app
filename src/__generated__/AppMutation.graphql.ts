/**
 * @generated SignedSource<<488bdc318f1db58a0e4e7e81c7760fd8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type SignInInput = {
  clientMutationId?: string | null | undefined;
  email: string;
  password: string;
};
export type AppMutation$variables = {
  input: SignInInput;
};
export type AppMutation$data = {
  readonly signIn: {
    readonly user: {
      readonly id: string;
      readonly name: string;
    } | null | undefined;
  } | null | undefined;
};
export type AppMutation = {
  response: AppMutation$data;
  variables: AppMutation$variables;
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "SignInPayload",
    "kind": "LinkedField",
    "name": "signIn",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
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
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3c84f27bfe1607636ceb539f92cfb46c",
    "id": null,
    "metadata": {},
    "name": "AppMutation",
    "operationKind": "mutation",
    "text": "mutation AppMutation(\n  $input: SignInInput!\n) {\n  signIn(input: $input) {\n    user {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b2d3973dddcb02a834839ed0ce58d634";

export default node;
