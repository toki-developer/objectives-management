import { gql } from "@apollo/client";
import type { VFC } from "react";
import type { ObjectiveFieldFragment } from "src/apollo/graphql";

type Props = {
  objective: ObjectiveFieldFragment;
};

export const ObjectiveListItem: VFC<Props> = (props) => {
  return (
    <div
      key={props.objective.id}
      className="border-t border-gray-600 mt-4 py-2"
    >
      <p>目標：{props.objective.title}</p>
      <p>目的</p>
      <p>行動</p>
      <p>評価指標</p>
    </div>
  );
};

gql`
  fragment ObjectiveField on objectives {
    id
    title
    sort_order
    finish_flg
    delete_flg
  }
`;
