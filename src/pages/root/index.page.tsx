import { ObjectiveList } from "src/pages/root/objectiveList";
import { supabase } from "src/utils/libs/initSupabase";

const Home = () => {
  const handleSignUp = () => {
    supabase.auth.signUp({ provider: "google" });
  };
  const handleSignIn = () => {
    supabase.auth.signIn({ provider: "google" });
  };
  const handleSignOut = () => {
    supabase.auth.signOut();
  };
  const user = supabase.auth.user();
  console.log(user);
  const session = supabase.auth.session();
  console.log(session?.access_token);
  const handleClick = async () => {
    await supabase
      .from("objectives")
      .insert({ user_id: user?.id, title: "9月の目標" });
  };
  return (
    <div>
      <h1>Hello World</h1>
      <div>
        <div>
          <button onClick={handleSignUp}>sign up</button>
        </div>
        <div>
          <button onClick={handleSignIn}>sign in</button>
        </div>
        <div>
          <button onClick={handleSignOut}>sign out</button>
        </div>
      </div>
      <br />
      <div>
        <button onClick={handleClick}>add objectives</button>
      </div>
      <ObjectiveList />
    </div>
  );
};

export default Home;
