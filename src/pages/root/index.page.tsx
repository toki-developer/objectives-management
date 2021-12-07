import { Layout } from "src/layout";
import { AddObjectiveForm } from "src/pages/root/ObjectiveForm";
import { ObjectiveList } from "src/pages/root/ObjectiveList";

const Home = () => {
  return (
    <Layout>
      <AddObjectiveForm />
      <ObjectiveList />
    </Layout>
  );
};

export default Home;
