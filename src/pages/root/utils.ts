import type { ObjectiveItemFieldFragment } from "src/apollo/graphql";

export const formItemInfoList = [
  { title: "", placeholder: "" },
  { title: "期間", placeholder: "いつまでに達成しますか？" },
  { title: "程度", placeholder: "どれくらいのレベルまでですか？" },
  { title: "目的", placeholder: "なぜ目標を達成するのですか？" },
  { title: "行動", placeholder: "どんな行動をしますか？" },
  { title: "評価指標", placeholder: "どうすれば達成ですか？" },
];

const PERIOD_TYPE = 1;
const DEGREE_TYPE = 2;
const PURPOSE_TYPE = 3;
const ACTION_TYPE = 4;
const EVALUATION_TYPE = 5;

export const separateByItemType = (
  objectiveItems: ObjectiveItemFieldFragment[]
) => {
  const periodItems = objectiveItems.filter((item) => {
    return item.itemsType == PERIOD_TYPE;
  });
  const degreeItems = objectiveItems.filter((item) => {
    return item.itemsType == DEGREE_TYPE;
  });
  const purposeItems = objectiveItems.filter((item) => {
    return item.itemsType == PURPOSE_TYPE;
  });
  const actionItems = objectiveItems.filter((item) => {
    return item.itemsType == ACTION_TYPE;
  });
  const evaluationItems = objectiveItems.filter((item) => {
    return item.itemsType == EVALUATION_TYPE;
  });
  return [periodItems, degreeItems, purposeItems, actionItems, evaluationItems];
};
