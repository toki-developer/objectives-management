import { gql } from "@apollo/client";
import { useGetObjectiveListQuery } from "src/apollo/graphql";

export const ObjectiveList = () => {
  const { data, loading, error } = useGetObjectiveListQuery();
  console.log(data);
  console.log(loading);
  console.log(error);
  return (
    <div>
      <p>{data?.objectives[0].title}</p>
      <div>目的 行動 評価指標</div>
    </div>
  );
};

gql`
  query GetObjectiveList {
    objectives {
      id
      title
      sort_order
      finish_flg
      delete_flg
    }
  }
`;
