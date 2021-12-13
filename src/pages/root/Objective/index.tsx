import { gql } from "@apollo/client";
import type { VFC } from "react";
import { useState } from "react";
import type {
  ObjectiveFieldFragment,
  ObjectiveItemFieldFragment,
} from "src/apollo/graphql";
import {
  AchieveButtons,
  DeleteButton,
  EditButton,
} from "src/pages/root/Objective/ObjectiveButton";
import { UpdateObjectiveForm } from "src/pages/root/ObjectiveForm";
import { formItemInfoList, separateByItemType } from "src/pages/root/utils";

type Props = { objective: ObjectiveFieldFragment };

export type ObjectiveItemProps = {
  title: string;
  objectiveItemList: ObjectiveItemFieldFragment[];
};

const ObjectiveItem: VFC<ObjectiveItemProps> = ({ objectiveItemList }) => {
  if (!objectiveItemList.length) return null;
  return (
    <div className="ml-4 mt-2">
      <p className="text-xs text-themeGray-2">
        {formItemInfoList[objectiveItemList[0].itemsType].title}
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

export const Objective: VFC<Props> = ({ objective }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [periodList, degreeList, purposeList, actionList, evaluationList] =
    separateByItemType(objective.objectiveItems);
  return (
    <div className="border-b border-themeGray-2 my-2 p-2">
      {isEdit ? (
        <UpdateObjectiveForm setIsEdit={setIsEdit} objective={objective} />
      ) : (
        <>
          <div className="flex justify-between">
            <div>
              <span className="text-themeGray-2">目標：</span>
              <span className="text-xl text-white">{objective.title}</span>
            </div>
            <AchieveButtons id={objective.id} />
          </div>
          <ObjectiveItem title="期間" objectiveItemList={periodList} />
          <ObjectiveItem title="程度" objectiveItemList={degreeList} />
          <ObjectiveItem title="目的" objectiveItemList={purposeList} />
          <ObjectiveItem title="行動" objectiveItemList={actionList} />
          <ObjectiveItem title="評価指標" objectiveItemList={evaluationList} />
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
    sortOrder
    finishFlg
    deleteFlg
    objectiveItems {
      ...ObjectiveItemField
    }
  }

  fragment ObjectiveItemField on objectiveItems {
    id
    title
    itemsType
    evaluationType
    successNum
    failureNum
    finishFlg
  }
`;
