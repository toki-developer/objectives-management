import { Layout } from "src/layout";
import { ObjectiveList } from "src/pages/root/ObjectiveList";

const Home = () => {
  return (
    <Layout>
      <div>
        <ObjectiveList />
      </div>
    </Layout>
  );
};

export default Home;
