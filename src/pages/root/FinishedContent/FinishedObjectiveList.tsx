import { gql } from "@apollo/client";
import type { VFC } from "react";
import { useCallback } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import type { FinishedObjectiveFieldFragment } from "src/apollo/graphql";
import { useReturnAchieveObjectiveMutation } from "src/apollo/graphql";
import { useGetFinishedObjectiveListQuery } from "src/apollo/graphql";
import { LoadingIcon } from "src/components/Icon";

type FinishedObjectiveProps = { objective: FinishedObjectiveFieldFragment };

const FinishedObjective: VFC<FinishedObjectiveProps> = ({ objective }) => {
  const [returnAchieveObjective, { loading }] =
    useReturnAchieveObjectiveMutation({
      variables: { id: objective.id },
    });
  const handleReturnAchieve = useCallback(() => {
    try {
      toast.success(`目標に戻しました`);
    } catch {
      toast.error("エラーが発生しました");
    }
    returnAchieveObjective();
  }, [returnAchieveObjective]);
  return (
    <div className="flex">
      <button
        className={`mr-2 ${loading ? "animate-reverse-spin" : ""}`}
        onClick={handleReturnAchieve}
      >
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
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      </button>
      <span>{objective.title}</span>
    </div>
  );
};

export const FinishedObjectiveList = () => {
  const [type, setType] = useState<number[]>([1, 2]);
  const { data, loading } = useGetFinishedObjectiveListQuery({
    variables: { _in: type },
  });
  const typeList: { title: string; type: number[] }[] = [
    { title: "全部", type: [1, 2] },
    { title: "達成", type: [1] },
    { title: "未達成", type: [2] },
  ];
  const handleChangeType = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    setType(
      value.split("-").map((str) => {
        return parseInt(str, 10);
      })
    );
  };
  return (
    <div>
      <div className="space-x-2 text-right mr-4">
        {typeList.map((typeItem) => {
          return (
            <button
              key={typeItem.title}
              onClick={handleChangeType}
              value={typeItem.type.join("-")}
              className={
                type.toString() == typeItem.type.toString()
                  ? ""
                  : "text-themeGray-2"
              }
            >
              {typeItem.title}
            </button>
          );
        })}
      </div>
      {data?.objectives.length == 0 ? (
        <div>過去の目標が存在しません</div>
      ) : loading ? (
        <LoadingIcon center />
      ) : (
        <div className="mt-2 space-y-2">
          {data?.objectives.map((objective) => {
            return (
              <FinishedObjective objective={objective} key={objective.id} />
            );
          })}
        </div>
      )}
    </div>
  );
};

gql`
  fragment FinishedObjectiveField on objectives {
    id
    title
  }

  query GetFinishedObjectiveList($_in: [Int!] = 0) {
    objectives(where: { finishFlg: { _in: $_in } }) {
      ...FinishedObjectiveField
    }
  }

  mutation ReturnAchieveObjective($id: uuid!) {
    updateObjectivesByPk(pk_columns: { id: $id }, _set: { finishFlg: 0 }) {
      id
    }
  }
`;
