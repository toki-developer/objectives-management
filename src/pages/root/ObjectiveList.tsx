import { gql, useReactiveVar } from "@apollo/client";
import { userVar } from "src/apollo/cache";
import type { ObjectiveFieldFragment } from "src/apollo/graphql";
import { useGetObjectiveListQuery } from "src/apollo/graphql";
import { Error } from "src/components/Error";
import { RequireLoginMessage } from "src/components/Message";
import { Objective } from "src/pages/root/Objective";
import { SkeletonObjective } from "src/pages/root/SkeletonObjective";

const EXAMPLE_OBJECTIVE: ObjectiveFieldFragment = {
  id: 0,
  title: "目標の例です",
  objective_items: [
    { id: 0, title: "目的のため", items_type: 1, evaluation_type: 0 },
    { id: 0, title: "行動をする", items_type: 2, evaluation_type: 0 },
    { id: 0, title: "行動をする", items_type: 2, evaluation_type: 0 },
    {
      id: 0,
      title: "評価指標を達成できたかどうか",
      items_type: 3,
      evaluation_type: 0,
    },
  ],
};

const NotLoggedObjective = () => {
  return (
    <div className="space-y-8">
      <Objective objective={EXAMPLE_OBJECTIVE} />
      <RequireLoginMessage />
    </div>
  );
};

export const ObjectiveList = () => {
  const loginUser = useReactiveVar(userVar);
  const { data, loading, error } = useGetObjectiveListQuery({
    skip: !loginUser,
  });
  if (loading) return <SkeletonObjective />;
  if (!error) return <Error />;
  if (!loginUser) {
    return <NotLoggedObjective />;
  }
  return (
    <>
      {data?.objectives.map((objective) => {
        return <Objective objective={objective} key={objective.id} />;
      })}
    </>
  );
};

gql`
  query GetObjectiveList {
    objectives {
      ...ObjectiveField
    }
  }
`;
