/**
 * @generated SignedSource<<f8e2ac1fb62faa0f8a92fb7650860c66>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type JoinGroupInput = {
  clientMutationId?: string | null | undefined;
  groupId: string;
};
export type groupMembershipButtonJoinMutation$variables = {
  input: JoinGroupInput;
};
export type groupMembershipButtonJoinMutation$data = {
  readonly joinGroup: {
    readonly errors: ReadonlyArray<string>;
    readonly group: {
      readonly " $fragmentSpreads": FragmentRefs<"groupMembershipButtonFragment">;
    } | null | undefined;
  } | null | undefined;
};
export type groupMembershipButtonJoinMutation = {
  response: groupMembershipButtonJoinMutation$data;
  variables: groupMembershipButtonJoinMutation$variables;
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "groupMembershipButtonJoinMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "JoinGroupPayload",
        "kind": "LinkedField",
        "name": "joinGroup",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Group",
            "kind": "LinkedField",
            "name": "group",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "groupMembershipButtonFragment"
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
    "name": "groupMembershipButtonJoinMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "JoinGroupPayload",
        "kind": "LinkedField",
        "name": "joinGroup",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Group",
            "kind": "LinkedField",
            "name": "group",
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
                "name": "viewerCanJoin",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "viewerCanLeave",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "viewerIsMember",
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
    "cacheID": "3896c00872f4155e83887e936b49378b",
    "id": null,
    "metadata": {},
    "name": "groupMembershipButtonJoinMutation",
    "operationKind": "mutation",
    "text": "mutation groupMembershipButtonJoinMutation(\n  $input: JoinGroupInput!\n) {\n  joinGroup(input: $input) {\n    errors\n    group {\n      ...groupMembershipButtonFragment\n      id\n    }\n  }\n}\n\nfragment groupMembershipButtonFragment on Group {\n  id\n  viewerCanJoin\n  viewerCanLeave\n  viewerIsMember\n}\n"
  }
};
})();

(node as any).hash = "04c8ea48147377b9d6f477bb987cf690";

export default node;
