import type { VFC } from "react";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { formItemInfoList } from "src/pages/root/utils";

type Props = {
  loading: boolean;
  submitFunction: (data: ObjectiveFormType) => void;
  initValue?: ObjectiveFormType;
  initItemLength?: [number, number, number];
  isEdit?: boolean;
};

export type ObjectiveFormType = {
  title: string;
  objectiveItems: { id: string; title: string; items_type: number }[];
};

export const ObjectiveForm: VFC<Props> = ({
  loading,
  submitFunction,
  initValue,
  initItemLength = [0, 0, 0],
  isEdit,
}) => {
  const { control, register, handleSubmit, formState, reset, setValue } =
    useForm<ObjectiveFormType>({
      defaultValues: initValue,
    });
  const { fields, insert, remove } = useFieldArray({
    control,
    name: "objectiveItems",
  });

  const handleClick = handleSubmit(async (data) => {
    try {
      await submitFunction(data);
      reset({ title: "", objectiveItems: [] });
      toast.success(`目標を${isEdit ? "更新" : "追加"}しました`);
    } catch (error) {
      toast.error("エラーが発生しました");
    }
  });

  const [length, setLength] = useState(initItemLength);
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
          {...register("title", {
            required: { value: true, message: "入力必須です" },
            minLength: { value: 2, message: "2文字以上で入力してください" },
            maxLength: { value: 1000, message: "1000文字以下で入力してください" },
          })}
          className="bg-transparent border-b border-gray-600 p-2 w-full focus:outline-none"
          placeholder="目標はなに？"
        />
        {formState.errors.title ? (
          <p className="text-red-500 text-xs ml-2">※ {formState.errors.title?.message}</p>
        ) : null}
        {fields.map((field, index) => {
          setValue(`objectiveItems.${index}.id`, field?.id);
          return (
            <div key={index}>
              <label className="flex items-center">
                <span className="text-xs"> - {formItemInfoList[field.items_type].title} -</span>
                <input
                  {...register(`objectiveItems.${index}.title`)}
                  className="bg-transparent border-b border-gray-600 p-2 flex-auto focus:outline-none"
                  placeholder={formItemInfoList[field.items_type].placeholder}
                />
                <button onClick={handleRemoveForm} value={`${index},${field.items_type}`}>
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
          {isEdit ? (loading ? "更新中" : "更新") : loading ? "保存中" : "保存"}
        </button>
      </div>
    </div>
  );
};
