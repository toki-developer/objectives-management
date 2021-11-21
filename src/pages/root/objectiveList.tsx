import { gql } from "@apollo/client";
import {
  useAddObjectiveMutation,
  useGetObjectiveListQuery,
} from "src/apollo/graphql";

export const ObjectiveList = () => {
  const { data, loading, error } = useGetObjectiveListQuery();
  const [addObjective] = useAddObjectiveMutation();
  const handleClick = () => {
    addObjective({ variables: { title: "test 目標" } });
  };
  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;
  return (
    <div>
      <button onClick={handleClick}>目標を追加</button>
      {data?.objectives.map((objective) => {
        return (
          <div key={objective.id}>
            <p>{objective.title}</p>
            <p>目的</p>
            <p>行動</p>
            <p>評価指標</p>
          </div>
        );
      })}
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

gql`
  mutation AddObjective($title: String!) {
    insert_objectives_one(object: { title: $title }) {
      id
      title
      sort_order
      delete_flg
      finish_flg
      user_id
    }
  }
`;
