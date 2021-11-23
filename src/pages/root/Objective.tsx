import { gql } from "@apollo/client";
import type { VFC } from "react";
import toast from "react-hot-toast";
import {
  ObjectiveFieldFragment,
  ObjectiveFieldFragmentDoc,
  ObjectiveItemFieldFragment,
  useDeleteObjectiveMutation,
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
        {formItemInfoList[props.objectiveItemList[0].items_type].title}
      </p>
      {props.objectiveItemList.map((item) => {
        return (
          <div key={item.id} className="mt-2">
            <p>- {item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

type EditButtonProps = {};

const EditButton: VFC<EditButtonProps> = () => {
  return (
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    </button>
  );
};

type DeleteButtonProps = {
  id: string;
};

const DeleteButton: VFC<DeleteButtonProps> = (props) => {
  const [deleteObjective] = useDeleteObjectiveMutation({
    variables: { id: props.id },
    update(cache) {
      cache.modify({
        fields: {
          objectives(existingObjectiveRefs, { readField }) {
            return existingObjectiveRefs.filter((objectiveRef: any) => {
              return props.id !== readField("id", objectiveRef);
            });
          },
        },
      });
    },
  });
  const handleDelete = async () => {
    if (!confirm("削除は取り消すことができません。本当に削除してもよろしいですか？")) {
      return;
    }
    try {
      await deleteObjective();
      toast.success("削除が完了しました");
    } catch (error) {
      toast.error("エラーが発生しました");
    }
  };
  return (
    <button onClick={handleDelete}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </button>
  );
};

export const Objective: VFC<Props> = (props) => {
  return (
    <div key={props.objective.id} className="border-t border-gray-600 mt-2 py-2">
      <div>
        <span className="text-gray-400">目標：</span>
        <span className="text-xl text-white">{props.objective.title}</span>
      </div>
      <ObjectiveItem title="目的" objectiveItemList={props.objective.purpose_items} />
      <ObjectiveItem title="行動" objectiveItemList={props.objective.action_items} />
      <ObjectiveItem title="評価指標" objectiveItemList={props.objective.evaluation_items} />
      <div className="flex justify-end space-x-2">
        <EditButton />
        <DeleteButton id={props.objective.id} />
      </div>
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

gql`
  mutation DeleteObjective($id: uuid!) {
    delete_objectives_by_pk(id: $id) {
      id
    }
  }
`;
