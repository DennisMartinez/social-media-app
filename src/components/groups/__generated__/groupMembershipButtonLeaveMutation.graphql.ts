/**
 * @generated SignedSource<<b5d0a96a3c71b470a5042c7f43aa4ce0>>
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
    readonly user: {
      readonly " $fragmentSpreads": FragmentRefs<"groupMembershipButtonViewerFragment">;
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
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "groupMembershipButtonViewerFragment"
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
              (v3/*: any*/),
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
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "groupCount",
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
    "cacheID": "3e87ebbceb05d4c7101525322435c942",
    "id": null,
    "metadata": {},
    "name": "groupMembershipButtonLeaveMutation",
    "operationKind": "mutation",
    "text": "mutation groupMembershipButtonLeaveMutation(\n  $input: LeaveGroupInput!\n) {\n  leaveGroup(input: $input) {\n    errors\n    group {\n      ...groupMembershipButtonFragment\n      id\n    }\n    user {\n      ...groupMembershipButtonViewerFragment\n      id\n    }\n  }\n}\n\nfragment groupMembershipButtonFragment on Group {\n  id\n  memberCount\n  viewerCanJoin\n  viewerCanLeave\n  viewerIsMember\n}\n\nfragment groupMembershipButtonViewerFragment on User {\n  id\n  groupCount\n}\n"
  }
};
})();

(node as any).hash = "ad496ec07ba8a84403716ae05b907262";

export default node;
