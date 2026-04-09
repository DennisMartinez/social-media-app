/**
 * @generated SignedSource<<0397964cb0aaecaede4d9088f756611a>>
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
        readonly avatarUrl: string | null | undefined;
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
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "avatarUrl",
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

(node as any).hash = "fee7fe902c4f5f48e6e55b74cfcb3a4f";

export default node;
