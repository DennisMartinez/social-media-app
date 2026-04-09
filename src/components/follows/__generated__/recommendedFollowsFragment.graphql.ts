/**
 * @generated SignedSource<<365d491b3379553ce4597422be1440a0>>
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
        readonly " $fragmentSpreads": FragmentRefs<"followUserFragment" | "unfollowUserFragment" | "userAvatarFragment">;
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
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "userAvatarFragment"
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

(node as any).hash = "6c60e5ca0e61ecec4e21f20ba24dbf60";

export default node;
