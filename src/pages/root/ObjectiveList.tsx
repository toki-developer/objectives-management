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
  title: "例 ) DB設計のスキルをつける",
  objectiveItems: [
    { id: 1, title: "半年後まで", itemsType: 1, evaluationType: 0 },
    {
      id: 2,
      title: "基本的なものなら設計できて、アンチパターンを踏まないレベル",
      itemsType: 2,
      evaluationType: 0,
    },
    {
      id: 3,
      title: "パフォーマンスやより良い書き方などよりも手前のレベル",
      itemsType: 2,
      evaluationType: 0,
    },
    {
      id: 4,
      title: "DB設計を課題に感じているため",
      itemsType: 3,
      evaluationType: 0,
    },
    {
      id: 5,
      title: "DB設計はアプリ作りにおいて根底になる大切な要素であるため",
      itemsType: 3,
      evaluationType: 0,
    },
    {
      id: 6,
      title: "DB設計のタスクを求め、開発の機会を増やし、レビューをもらう",
      itemsType: 4,
      evaluationType: 0,
    },
    {
      id: 7,
      title: "DB設計に関する本を読む",
      itemsType: 4,
      evaluationType: 0,
    },
    {
      id: 8,
      title: "明らかな間違いなく、基本的なものが1人で設計できるかどうか",
      itemsType: 5,
      evaluationType: 0,
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
  if (error) return <Error />;
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
    objectives(where: { finishFlg: { _eq: 0 } }) {
      ...ObjectiveField
    }
  }
`;
