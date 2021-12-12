import { Layout } from "src/layout";
import { FinishedContent } from "src/pages/root/FinishedContent";
import { AddObjectiveForm } from "src/pages/root/ObjectiveForm";
import { ObjectiveList } from "src/pages/root/ObjectiveList";

const Home = () => {
  return (
    <Layout>
      <AddObjectiveForm />
      <ObjectiveList />
      <FinishedContent />
    </Layout>
  );
};

export default Home;
