import { gql } from "@apollo/client";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import {
  ObjectiveFieldFragmentDoc,
  useAddObjectiveMutation,
  useGetObjectiveListQuery,
} from "src/apollo/graphql";
import { Objective } from "src/pages/root/Objective";
import { formItemInfoList } from "src/pages/root/utils";
import { supabase } from "src/utils/libs/initSupabase";

const ObjectForm = () => {
  const {
    control,
    register,
    handleSubmit,
    // formState: { errors },
    reset,
  } = useForm<{
    title: string;
    objective_items: { title: string; items_type: number }[];
  }>();
  const { fields, insert, remove } = useFieldArray({
    control,
    name: "objective_items",
  });
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
  const handleClick = handleSubmit(async (data) => {
    try {
      await addObjective({
        variables: {
          title: data.title,
          objective_items: { data: data.objective_items },
        },
      });
      reset({ title: "", objective_items: [] });
    } catch (error) {
      alert("エラーが発生しました");
    }
  });
  const [length, setLength] = useState([0, 0, 0]);
  const handleAddForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    const items_type = parseInt(e.currentTarget.value);
    const index = length.slice(0, items_type).reduce((prev, current) => {
      return prev + current;
    });
    insert(index, { title: "", items_type });
    length[items_type - 1] += 1;
    setLength(length);
  };
  const handleRemoveForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    const [index, items_type] = e.currentTarget.value.split(",");
    length[parseInt(items_type) - 1] -= 1;
    setLength(length);
    remove(parseInt(index));
  };

  return (
    <div>
      <fieldset>
        <input
          {...register("title")}
          className="bg-transparent border-b border-gray-600 p-2 w-full focus:outline-none"
          placeholder="目標はなに？"
        />
        {fields.map((field, index) => {
          return (
            <div key={index}>
              <label className="flex items-center">
                <span>{formItemInfoList[field.items_type].title}：</span>
                <input
                  {...register(`objective_items.${index}.title`)}
                  className="bg-transparent border-b border-gray-600 p-2 flex-auto focus:outline-none"
                  placeholder={formItemInfoList[field.items_type].placeholder}
                />
                <button
                  onClick={handleRemoveForm}
                  value={`${index},${field.items_type}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mx-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </label>
            </div>
          );
        })}
      </fieldset>
      <div className="flex justify-between py-2">
        <div className="text-gray-400 space-x-4">
          <button onClick={handleAddForm} value="1">
            + 目的
          </button>
          <button onClick={handleAddForm} value="2">
            + 行動
          </button>
          <button onClick={handleAddForm} value="3">
            + 評価指標
          </button>
        </div>
        <button
          onClick={handleClick}
          className={`px-2 py-1 rounded-md w-20 ${
            loading ? "bg-green-300 cursor-not-allowed" : "bg-green-600"
          }`}
          disabled={loading}
        >
          {loading ? "保存中" : "保存"}
        </button>
      </div>
    </div>
  );
};

export const ObjectiveList = () => {
  const user = supabase.auth.user();
  const { data, loading, error } = useGetObjectiveListQuery({ skip: !user });
  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;
  return (
    <div>
      <ObjectForm />
      {data?.objectives.map((objective) => {
        return <Objective objective={objective} key={objective.id} />;
      })}
    </div>
  );
};

gql`
  query GetObjectiveList {
    objectives {
      ...ObjectiveField
    }
  }
`;

gql`
  mutation AddObjective(
    $title: String!
    $objective_items: objective_items_arr_rel_insert_input
  ) {
    insert_objectives_one(
      object: { title: $title, objective_items: $objective_items }
    ) {
      id
    }
  }
`;

// todo
// objective_items_arr_rel_insert_inputを必要な型に修正
