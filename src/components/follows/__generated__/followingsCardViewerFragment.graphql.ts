/**
 * @generated SignedSource<<f337cf444739ff25550691b3331fa262>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type followingsCardViewerFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"followeeViewerFragment">;
  readonly " $fragmentType": "followingsCardViewerFragment";
};
export type followingsCardViewerFragment$key = {
  readonly " $data"?: followingsCardViewerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"followingsCardViewerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "followingsCardViewerFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "followeeViewerFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "44e0c51533a83e1b96ec205172624820";

export default node;
