import { gql } from "@apollo/client";
import { useCallback } from "react";
import toast from "react-hot-toast";
import {
  useAchievedObjectiveMutation,
  useFailedObjectiveMutation,
} from "src/apollo/graphql";
import { Button } from "src/components/Button";
import { useRequireLogin } from "src/utils/hooks/useRequireLogin";

export const CompleteButtons = ({ id }: { id: string }) => {
  const requireLogin = useRequireLogin();
  const [AchievedObjective, { loading: achievedLoading }] =
    useAchievedObjectiveMutation({
      variables: { id },
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
  const handleAchieved = useCallback(async () => {
    if (requireLogin()) {
      return;
    }
    try {
      await AchievedObjective();
      toast.success(`目標を達成にしました`);
    } catch (error) {
      toast.error("エラーが発生しました");
    }
  }, [requireLogin, AchievedObjective]);
  const [FailedObjective, { loading: failedLoading }] =
    useFailedObjectiveMutation({
      variables: { id },
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
  const handleFailed = useCallback(async () => {
    if (requireLogin()) {
      return;
    }
    try {
      await FailedObjective();
      toast.success(`目標を未達にしました`);
    } catch (error) {
      toast.error("エラーが発生しました");
    }
  }, [requireLogin, FailedObjective]);

  return (
    <div className="space-x-2 flex-none">
      <Button
        variant="outline"
        onClick={handleAchieved}
        loading={achievedLoading || failedLoading}
      >
        {achievedLoading ? "更新中" : "達成"}
      </Button>
      <Button
        variant="outline"
        onClick={handleFailed}
        loading={achievedLoading || failedLoading}
      >
        {failedLoading ? "更新中" : "未達成"}
      </Button>
    </div>
  );
};

gql`
  mutation AchievedObjective($id: uuid!) {
    updateObjectivesByPk(pk_columns: { id: $id }, _set: { finishFlg: 1 }) {
      id
    }
  }
  mutation FailedObjective($id: uuid!) {
    updateObjectivesByPk(pk_columns: { id: $id }, _set: { finishFlg: 2 }) {
      id
    }
  }
`;
