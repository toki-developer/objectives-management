import { gql } from "@apollo/client";
import type { VFC } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import type {
  ObjectiveFieldFragment,
  ObjectiveItemFieldFragment,
} from "src/apollo/graphql";
import { useDeleteObjectiveMutation } from "src/apollo/graphql";
import { UpdateObjectiveForm } from "src/pages/root/UpdateObjectiveForm";
import { formItemInfoList, separateByItemType } from "src/pages/root/utils";
import { useRequireLogin } from "src/utils/hooks/useRequireLogin";

type Props = { objective: ObjectiveFieldFragment };

export type ObjectiveItemProps = {
  title: string;
  objectiveItemList: ObjectiveItemFieldFragment[];
};

const ObjectiveItem: VFC<ObjectiveItemProps> = ({ objectiveItemList }) => {
  if (!objectiveItemList.length) return null;
  return (
    <div className="ml-4 mt-2">
      <p className="text-xs text-gray-400">
        {formItemInfoList[objectiveItemList[0].items_type].title}
      </p>
      {objectiveItemList.map((item) => {
        return (
          <div key={item.id} className="mt-2">
            <p>- {item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

type EditButtonProps = {
  setIsEdit: (v: boolean) => void;
};

type DeleteButtonProps = {
  id: string;
};

const EditButton: VFC<EditButtonProps> = ({ setIsEdit }) => {
  const handleEdit = () => {
    setIsEdit(true);
  };
  return (
    <button onClick={handleEdit}>
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

const DeleteButton: VFC<DeleteButtonProps> = ({ id }) => {
  const requireLogin = useRequireLogin();
  const [deleteObjective] = useDeleteObjectiveMutation({
    variables: { id: id },
    update(cache) {
      cache.modify({
        fields: {
          objectives(existingObjectiveRefs, { readField }) {
            return existingObjectiveRefs.filter((objectiveRef: any) => {
              return id !== readField("id", objectiveRef);
            });
          },
        },
      });
    },
  });
  const handleDelete = async () => {
    if (requireLogin()) {
      return;
    }
    if (
      !confirm(
        "削除は取り消すことができません。本当に削除してもよろしいですか？"
      )
    ) {
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

export const Objective: VFC<Props> = ({ objective }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [purpose, action, evaluation] = separateByItemType(
    objective.objective_items
  );
  return (
    <div className="border-t border-gray-600 mt-2 py-2">
      {isEdit ? (
        <>
          <UpdateObjectiveForm setIsEdit={setIsEdit} objective={objective} />
        </>
      ) : (
        <>
          <div>
            <span className="text-gray-400">目標：</span>
            <span className="text-xl text-white">{objective.title}</span>
          </div>
          <ObjectiveItem title="目的" objectiveItemList={purpose} />
          <ObjectiveItem title="行動" objectiveItemList={action} />
          <ObjectiveItem title="評価指標" objectiveItemList={evaluation} />
          <div className="flex justify-end space-x-2">
            <EditButton setIsEdit={setIsEdit} />
            <DeleteButton id={objective.id} />
          </div>
        </>
      )}
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
    objective_items {
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
