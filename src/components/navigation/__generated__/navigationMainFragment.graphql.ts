/**
 * @generated SignedSource<<9616dcb414994aa3cc28b77f4acbc95d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type navigationMainFragment$data = {
  readonly id: string;
  readonly " $fragmentType": "navigationMainFragment";
};
export type navigationMainFragment$key = {
  readonly " $data"?: navigationMainFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"navigationMainFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "navigationMainFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "5104e13fac213ebbd8ede7ff65058ae3";

export default node;
