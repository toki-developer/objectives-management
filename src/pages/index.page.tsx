import { gql } from "@apollo/client";
import { useMyQueryQuery } from "src/apollo/graphql";

const Home = () => {
  const { data, loading, error } = useMyQueryQuery();
  console.log(data);
  console.log(loading);
  console.log(error);
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default Home;

gql`
  query MyQuery {
    objectives {
      id
      title
    }
  }
`;
