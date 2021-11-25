import type { ObjectiveItemFieldFragment } from "src/apollo/graphql";

export const formItemInfoList = [
  { title: "", placeholder: "" },
  { title: "目的", placeholder: "なぜ目標を達成するのですか？" },
  { title: "行動", placeholder: "どんな行動をしますか？" },
  { title: "評価指標", placeholder: "どうすれば達成ですか？" },
];

export const separateByItemType = (objectiveItems: ObjectiveItemFieldFragment[]) => {
  const purposeItems = objectiveItems.filter((item) => {
    return item.items_type == 1;
  });
  const actionItems = objectiveItems.filter((item) => {
    return item.items_type == 2;
  });
  const evaluationItems = objectiveItems.filter((item) => {
    return item.items_type == 3;
  });
  return [purposeItems, actionItems, evaluationItems];
};
