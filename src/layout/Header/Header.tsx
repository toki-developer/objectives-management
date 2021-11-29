import { AuthButton } from "src/layout/Header/AuthButton";

export const Header = () => {
  return (
    <header className="flex justify-between items-center border-b-2 py-2 border-gray-300">
      <div>
        <ul>
          <li>目標管理</li>
        </ul>
      </div>
      <AuthButton />
    </header>
  );
};
