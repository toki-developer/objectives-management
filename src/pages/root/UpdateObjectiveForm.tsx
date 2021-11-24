import { gql } from "@apollo/client";
import type { VFC } from "react";
import type { ObjectiveFieldFragment } from "src/apollo/graphql";
import { useUpdateObjectiveMutation } from "src/apollo/graphql";
import type { ObjectiveFormType } from "src/pages/root/ObjectiveForm";
import { ObjectiveForm } from "src/pages/root/ObjectiveForm";

type Props = {
  setIsEdit: (v: boolean) => void;
  objective: ObjectiveFieldFragment;
};

export const UpdateObjectiveForm: VFC<Props> = ({ setIsEdit, objective }) => {
  const [updateObjective, { loading }] = useUpdateObjectiveMutation();
  const objectiveItems = [
    ...objective.purpose_items,
    ...objective.action_items,
    ...objective.evaluation_items,
  ];

  const onHandleUpdateObjective = async (data: ObjectiveFormType) => {
    const delete_ids = objectiveItems
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
    objectiveItems: objectiveItems,
  };
  const handleCloseEdit = () => {
    setIsEdit(false);
  };
  return (
    <>
      <ObjectiveForm
        loading={loading}
        submitFunction={onHandleUpdateObjective}
        initValue={initValue}
        initItemLength={[
          objective.purpose_items.length,
          objective.action_items.length,
          objective.evaluation_items.length,
        ]}
        isEdit
      />
      <button onClick={handleCloseEdit}>更新取り消し</button>
    </>
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
    }
    insert_objective_items(
      on_conflict: { constraint: objective_items_pkey, update_columns: title }
      objects: $objects
    ) {
      returning {
        id
      }
    }
    delete_objective_items(where: { id: { _in: $delete_id } }) {
      returning {
        id
      }
    }
  }
`;

// キャッシュの更新
// titleがmaybeになる調査
