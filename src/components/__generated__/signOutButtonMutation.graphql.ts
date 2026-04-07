/**
 * @generated SignedSource<<f9dbc367c2dc4f64d360a821e5d0c372>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type SignOutInput = {
  clientMutationId?: string | null | undefined;
};
export type signOutButtonMutation$variables = {
  input: SignOutInput;
};
export type signOutButtonMutation$data = {
  readonly signOut: {
    readonly errors: ReadonlyArray<string>;
    readonly success: boolean;
  } | null | undefined;
};
export type signOutButtonMutation = {
  response: signOutButtonMutation$data;
  variables: signOutButtonMutation$variables;
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
    "concreteType": "SignOutPayload",
    "kind": "LinkedField",
    "name": "signOut",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
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
    "name": "signOutButtonMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "signOutButtonMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5712b6dd46d5c95b6910216a47e21d80",
    "id": null,
    "metadata": {},
    "name": "signOutButtonMutation",
    "operationKind": "mutation",
    "text": "mutation signOutButtonMutation(\n  $input: SignOutInput!\n) {\n  signOut(input: $input) {\n    success\n    errors\n  }\n}\n"
  }
};
})();

(node as any).hash = "a8b86f44577811e469f7afb685ede300";

export default node;
