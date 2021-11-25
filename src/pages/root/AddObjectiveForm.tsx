import { gql } from "@apollo/client";
import { ObjectiveFieldFragmentDoc, useAddObjectiveMutation } from "src/apollo/graphql";
import type { ObjectiveFormType } from "src/pages/root/ObjectiveForm";
import { ObjectiveForm } from "src/pages/root/ObjectiveForm";

export const AddObjectiveForm = () => {
  const [addObjective, { loading }] = useAddObjectiveMutation({
    update(cache, { data }) {
      cache.modify({
        fields: {
          objectives(existingObjectiveRefs = []) {
            const newObjectiveRef = cache.writeFragment({
              data: data?.insert_objectives_one,
              fragment: ObjectiveFieldFragmentDoc,
              fragmentName: "ObjectiveField",
            });
            return [...existingObjectiveRefs, newObjectiveRef];
          },
        },
      });
    },
  });
  const onHandleAddObjective = async (data: ObjectiveFormType) => {
    await addObjective({
      variables: {
        title: data.title,
        objective_items: { data: data.objectiveItems },
      },
    });
  };
  return <ObjectiveForm loading={loading} submitFunction={onHandleAddObjective} />;
};

gql`
  mutation AddObjective($title: String!, $objective_items: objective_items_arr_rel_insert_input) {
    insert_objectives_one(object: { title: $title, objective_items: $objective_items }) {
      id
    }
  }
`;
