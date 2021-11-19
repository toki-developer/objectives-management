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
  return (
    <div>
      <h1>Hello World</h1>
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
  );
};

export default Home;
