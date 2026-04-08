/**
 * @generated SignedSource<<b6c7c1e5a94967526bca8fe25a644f64>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type recommendedFollowsFragment$data = {
  readonly recommendedFollows: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly isFollowing: boolean;
        readonly name: string;
        readonly " $fragmentSpreads": FragmentRefs<"followUserFragment" | "unfollowUserFragment">;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  };
  readonly " $fragmentType": "recommendedFollowsFragment";
};
export type recommendedFollowsFragment$key = {
  readonly " $data"?: recommendedFollowsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"recommendedFollowsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "recommendedFollowsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "UserConnection",
      "kind": "LinkedField",
      "name": "recommendedFollows",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "UserEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "User",
              "kind": "LinkedField",
              "name": "node",
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
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "isFollowing",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "followUserFragment"
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "unfollowUserFragment"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "a881fb7d0cad65f92f7c17cec6937826";

export default node;
