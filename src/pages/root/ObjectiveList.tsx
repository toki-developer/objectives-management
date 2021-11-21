import { gql } from "@apollo/client";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import {
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
  } = useForm<{
    title: string;
    objective_items: { title: string; items_type: number }[];
  }>();
  const { fields, insert } = useFieldArray({
    control,
    name: "objective_items",
  });
  const [addObjective] = useAddObjectiveMutation();
  const handleClick = handleSubmit((data) => {
    addObjective({
      variables: {
        title: data.title,
        objective_items: { data: data.objective_items },
      },
    });
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
                {formItemInfoList[field.items_type].title}：
                <input
                  {...register(`objective_items.${index}.title`)}
                  className="bg-transparent border-b border-gray-600 p-2 flex-auto focus:outline-none"
                  placeholder={formItemInfoList[field.items_type].placeholder}
                />
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
          className="px-2 py-1 rounded-md bg-green-600"
        >
          保存
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
// 1. formを減らす
// 2. formで評価の種類を入れる(回数、割合)
// 4. objective_items_arr_rel_insert_inputを必要な型に修正
