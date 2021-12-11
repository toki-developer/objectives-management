import { gql } from "@apollo/client";
import {
  ObjectiveFieldFragmentDoc,
  useAddObjectiveMutation,
} from "src/apollo/graphql";
import type { ObjectiveFormType } from "src/pages/root/ObjectiveForm/ObjectiveForm";
import { ObjectiveForm } from "src/pages/root/ObjectiveForm/ObjectiveForm";

export const AddObjectiveForm = () => {
  const [addObjective, { loading }] = useAddObjectiveMutation({
    update(cache, { data }) {
      cache.modify({
        fields: {
          objectives(existingObjectiveRefs = []) {
            const newObjectiveRef = cache.writeFragment({
              data: data?.insertObjectivesOne,
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
        objectiveItems: { data: data.objectiveItems },
      },
    });
  };
  return (
    <div className="border-b border-themeGray-2 mt-2 py-2">
      <ObjectiveForm loading={loading} submitFunction={onHandleAddObjective} />
    </div>
  );
};

gql`
  mutation AddObjective(
    $title: String!
    $objectiveItems: objectiveItems_arr_rel_insert_input
  ) {
    insertObjectivesOne(
      object: { title: $title, objectiveItems: $objectiveItems }
    ) {
      id
    }
  }
`;
