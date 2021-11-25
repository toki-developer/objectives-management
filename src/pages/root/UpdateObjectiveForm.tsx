import { gql } from "@apollo/client";
import type { MouseEventHandler, VFC } from "react";
import type { ObjectiveFieldFragment } from "src/apollo/graphql";
import { useUpdateObjectiveMutation } from "src/apollo/graphql";
import type { ObjectiveFormType } from "src/pages/root/ObjectiveForm";
import { ObjectiveForm } from "src/pages/root/ObjectiveForm";
import { separateByItemType } from "src/pages/root/utils";

type Props = {
  setIsEdit: (v: boolean) => void;
  objective: ObjectiveFieldFragment;
};

type EditCloseButtonProps = {
  handleCloseEdit: MouseEventHandler<HTMLButtonElement>;
};

const EditCloseButton: VFC<EditCloseButtonProps> = (props) => {
  return (
    <button onClick={props.handleCloseEdit} className="flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      更新取消
    </button>
  );
};

export const UpdateObjectiveForm: VFC<Props> = ({ setIsEdit, objective }) => {
  const [updateObjective, { loading }] = useUpdateObjectiveMutation({
    update(cache, { data }) {
      cache.modify({
        id: cache.identify(objective),
        fields: {
          objective_items() {
            return data?.insert_objective_items?.returning.map((item) => {
              return { __ref: cache.identify(item) };
            });
          },
        },
      });
    },
  });

  const onHandleUpdateObjective = async (data: ObjectiveFormType) => {
    const delete_ids = objective.objective_items
      .filter((prevItem) => {
        return (
          data.objectiveItems.filter((newItem) => {
            return newItem.id == prevItem.id;
          }).length == 0
        );
      })
      .map((item) => {
        return item.id;
      });
    await updateObjective({
      variables: {
        id: objective.id,
        title: data.title,
        objects: data.objectiveItems.map((item) => {
          return {
            id: item.id,
            objective_id: objective.id,
            title: item.title,
            items_type: item.items_type,
          };
        }),
        delete_id: delete_ids,
      },
    });
    setIsEdit(false);
  };
  const initValue: ObjectiveFormType = {
    title: objective.title,
    objectiveItems: objective.objective_items,
  };
  const onHandleCloseEdit = () => {
    setIsEdit(false);
  };
  const [purpose, action, evaluation] = separateByItemType(objective.objective_items);
  return (
    <ObjectiveForm
      loading={loading}
      submitFunction={onHandleUpdateObjective}
      initValue={initValue}
      initItemLength={[purpose.length, action.length, evaluation.length]}
      isEdit
      editCloseButton={<EditCloseButton handleCloseEdit={onHandleCloseEdit} />}
    />
  );
};

gql`
  mutation UpdateObjective(
    $id: uuid!
    $title: String!
    $objects: [objective_items_insert_input!] = {}
    $delete_id: [uuid!]
  ) {
    update_objectives_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {
      id
      title
    }
    insert_objective_items(
      on_conflict: { constraint: objective_items_pkey, update_columns: title }
      objects: $objects
    ) {
      returning {
        id
        title
      }
    }
    delete_objective_items(where: { id: { _in: $delete_id } }) {
      returning {
        id
      }
    }
  }
`;
