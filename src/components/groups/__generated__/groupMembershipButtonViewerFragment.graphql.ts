/**
 * @generated SignedSource<<4cf25454e62f32f759b005867f60055d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type groupMembershipButtonViewerFragment$data = {
  readonly groupCount: number;
  readonly id: string;
  readonly " $fragmentType": "groupMembershipButtonViewerFragment";
};
export type groupMembershipButtonViewerFragment$key = {
  readonly " $data"?: groupMembershipButtonViewerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"groupMembershipButtonViewerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "groupMembershipButtonViewerFragment",
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
      "name": "groupCount",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "b44b33a15e15aadc5038abb4886714f6";

export default node;
