import { gql } from "@apollo/client";
import type { VFC } from "react";
import type {
  ObjectiveFieldFragment,
  ObjectiveItemFieldFragment,
} from "src/apollo/graphql";
import { formItemInfoList } from "src/pages/root/utils";

type Props = { objective: ObjectiveFieldFragment };

type ObjectiveItemProps = {
  title: string;
  objectiveItemList: ObjectiveItemFieldFragment[];
};

const ObjectiveItem: VFC<ObjectiveItemProps> = (props) => {
  if (!props.objectiveItemList.length) return null;
  return (
    <div className="ml-4 mt-2">
      <p className="text-xs text-gray-400">
        - {formItemInfoList[props.objectiveItemList[0].items_type].title} -
      </p>
      {props.objectiveItemList.map((item) => {
        return (
          <div key={item.id} className="mt-1">
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export const Objective: VFC<Props> = (props) => {
  return (
    <div
      key={props.objective.id}
      className="border-t border-gray-600 mt-4 py-2"
    >
      <div>
        <span className="text-gray-400">目標：</span>
        <span className="text-xl text-white">{props.objective.title}</span>
      </div>
      <ObjectiveItem
        title="目的"
        objectiveItemList={props.objective.purpose_items}
      />
      <ObjectiveItem
        title="行動"
        objectiveItemList={props.objective.action_items}
      />
      <ObjectiveItem
        title="評価指標"
        objectiveItemList={props.objective.evaluation_items}
      />
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
    purpose_items: objective_items(where: { items_type: { _eq: 1 } }) {
      ...ObjectiveItemField
    }
    action_items: objective_items(where: { items_type: { _eq: 2 } }) {
      ...ObjectiveItemField
    }
    evaluation_items: objective_items(where: { items_type: { _eq: 3 } }) {
      ...ObjectiveItemField
    }
  }

  fragment ObjectiveItemField on objective_items {
    id
    title
    items_type
    evaluation_type
    success_num
    failure_num
    finish_flg
  }
`;
