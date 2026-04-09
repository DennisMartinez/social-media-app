/**
 * @generated SignedSource<<537cdc602f1e72e9ed59eff3d2333b6a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type createCommentFormUserFragment$data = {
  readonly avatarUrl: string | null | undefined;
  readonly id: string;
  readonly name: string;
  readonly " $fragmentSpreads": FragmentRefs<"userAvatarFragment">;
  readonly " $fragmentType": "createCommentFormUserFragment";
};
export type createCommentFormUserFragment$key = {
  readonly " $data"?: createCommentFormUserFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"createCommentFormUserFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "createCommentFormUserFragment",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "avatarUrl",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "userAvatarFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "445ea87888cd0e76cbdcec07956326b0";

export default node;
