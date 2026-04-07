/**
 * @generated SignedSource<<f78851fb2f95330aa3309071cf75a354>>
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
export type signInFormMutation$variables = {
  input: SignInInput;
};
export type signInFormMutation$data = {
  readonly signIn: {
    readonly currentUser: {
      readonly id: string;
      readonly name: string;
    } | null | undefined;
    readonly errors: ReadonlyArray<string>;
  } | null | undefined;
};
export type signInFormMutation = {
  response: signInFormMutation$data;
  variables: signInFormMutation$variables;
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
        "name": "currentUser",
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "errors",
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
    "name": "signInFormMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "signInFormMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "68e7035bb42e36287464cfeabffcef4b",
    "id": null,
    "metadata": {},
    "name": "signInFormMutation",
    "operationKind": "mutation",
    "text": "mutation signInFormMutation(\n  $input: SignInInput!\n) {\n  signIn(input: $input) {\n    currentUser {\n      id\n      name\n    }\n    errors\n  }\n}\n"
  }
};
})();

(node as any).hash = "a80e55432311a6d091c83d9b8e7e601c";

export default node;
