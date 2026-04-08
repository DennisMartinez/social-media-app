/**
 * @generated SignedSource<<b30bcf038d6e251977a5cb58147c2509>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type whoToFollowFragment$data = {
  readonly usersToFollow: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly isFollowing: boolean;
        readonly name: string;
        readonly " $fragmentSpreads": FragmentRefs<"followUserFragment" | "unfollowUserFragment">;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  };
  readonly " $fragmentType": "whoToFollowFragment";
};
export type whoToFollowFragment$key = {
  readonly " $data"?: whoToFollowFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"whoToFollowFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "whoToFollowFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "UserConnection",
      "kind": "LinkedField",
      "name": "usersToFollow",
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
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "51b540398c1f19b8446273b8ae026678";

export default node;
