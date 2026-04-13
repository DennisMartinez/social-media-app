/**
 * @generated SignedSource<<c081c119310704da455cc2caad8bb58e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LeaveGroupInput = {
  clientMutationId?: string | null | undefined;
  groupId: string;
};
export type groupMembershipButtonLeaveMutation$variables = {
  input: LeaveGroupInput;
};
export type groupMembershipButtonLeaveMutation$data = {
  readonly leaveGroup: {
    readonly errors: ReadonlyArray<string>;
    readonly group: {
      readonly " $fragmentSpreads": FragmentRefs<"groupMembershipButtonFragment">;
    } | null | undefined;
  } | null | undefined;
};
export type groupMembershipButtonLeaveMutation = {
  response: groupMembershipButtonLeaveMutation$data;
  variables: groupMembershipButtonLeaveMutation$variables;
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
    "name": "groupMembershipButtonLeaveMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "LeaveGroupPayload",
        "kind": "LinkedField",
        "name": "leaveGroup",
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
    "name": "groupMembershipButtonLeaveMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "LeaveGroupPayload",
        "kind": "LinkedField",
        "name": "leaveGroup",
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
                "name": "memberCount",
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
    "cacheID": "89811b1829649b8799ab5d3bc178e55c",
    "id": null,
    "metadata": {},
    "name": "groupMembershipButtonLeaveMutation",
    "operationKind": "mutation",
    "text": "mutation groupMembershipButtonLeaveMutation(\n  $input: LeaveGroupInput!\n) {\n  leaveGroup(input: $input) {\n    errors\n    group {\n      ...groupMembershipButtonFragment\n      id\n    }\n  }\n}\n\nfragment groupMembershipButtonFragment on Group {\n  id\n  memberCount\n  viewerCanJoin\n  viewerCanLeave\n  viewerIsMember\n}\n"
  }
};
})();

(node as any).hash = "2c086c2bfad0bebb432ff323a37b4ce1";

export default node;
