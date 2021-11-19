import { supabase } from "src/utils/libs/initSupabase";

const Home = () => {
  const handleClick = async () => {
    await supabase.from("users").insert({ name: "test-user" });
  };
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={handleClick}>add user</button>
    </div>
  );
};

export default Home;
