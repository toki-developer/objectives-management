import { gql } from "@apollo/client";
import type { VFC } from "react";
import toast from "react-hot-toast";
import { useDeleteObjectiveMutation } from "src/apollo/graphql";
import { useRequireLogin } from "src/utils/hooks/useRequireLogin";

type DeleteButtonProps = {
  id: string;
};

export const DeleteButton: VFC<DeleteButtonProps> = ({ id }) => {
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

gql`
  mutation DeleteObjective($id: uuid!) {
    deleteObjectivesByPk(id: $id) {
      id
    }
  }
`;
