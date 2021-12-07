import { gql } from "@apollo/client";
import type { MouseEventHandler, VFC } from "react";
import type { ObjectiveFieldFragment } from "src/apollo/graphql";
import { useUpdateObjectiveMutation } from "src/apollo/graphql";
import type { ObjectiveFormType } from "src/pages/root/ObjectiveForm/ObjectiveForm";
import { ObjectiveForm } from "src/pages/root/ObjectiveForm/ObjectiveForm";
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
            return data?.insertObjectiveItems?.returning.map((item) => {
              return { __ref: cache.identify(item) };
            });
          },
        },
      });
    },
  });

  const onHandleUpdateObjective = async (data: ObjectiveFormType) => {
    const deleteIds = objective.objectiveItems
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
            objectiveId: objective.id,
            title: item.title,
            itemsType: item.itemsType,
          };
        }),
        deleteId: deleteIds,
      },
    });
    setIsEdit(false);
  };
  const initValue: ObjectiveFormType = {
    title: objective.title,
    objectiveItems: objective.objectiveItems,
  };
  const onHandleCloseEdit = () => {
    setIsEdit(false);
  };
  const [periodList, degreeList, purposeList, actionList, evaluationList] = separateByItemType(
    objective.objectiveItems
  );
  return (
    <ObjectiveForm
      loading={loading}
      submitFunction={onHandleUpdateObjective}
      initValue={initValue}
      initItemLength={[
        periodList.length,
        degreeList.length,
        purposeList.length,
        actionList.length,
        evaluationList.length,
      ]}
      isEdit
      editCloseButton={<EditCloseButton handleCloseEdit={onHandleCloseEdit} />}
    />
  );
};

gql`
  mutation UpdateObjective(
    $id: uuid!
    $title: String!
    $objects: [objectiveItems_insert_input!] = {}
    $deleteId: [uuid!]
  ) {
    updateObjectivesByPk(pk_columns: { id: $id }, _set: { title: $title }) {
      id
      title
    }
    insertObjectiveItems(
      on_conflict: { constraint: objective_items_pkey, update_columns: title }
      objects: $objects
    ) {
      returning {
        id
        title
      }
    }
    deleteObjectiveItems(where: { id: { _in: $deleteId } }) {
      returning {
        id
      }
    }
  }
`;
