import { gql, useReactiveVar } from "@apollo/client";
import { userVar } from "src/apollo/cache";
import { useGetObjectiveListQuery } from "src/apollo/graphql";
import { Objective } from "src/pages/root/Objective";

export const ObjectiveList = () => {
  const loginUser = useReactiveVar(userVar);
  const { data, loading, error } = useGetObjectiveListQuery({ skip: !loginUser });
  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;
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
