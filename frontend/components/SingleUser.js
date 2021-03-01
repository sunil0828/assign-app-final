import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const SINGLE_USER_QUERY = gql`
  query SINGLE_USER_QUERY($id: ID!) {
    User(where: { id: $id }) {
      id
      name
      email
      phoneNumber
    }
  }
`;

export default function SingleUser({ id }) {
  console.log(id);
  const { data, error, loading } = useQuery(SINGLE_USER_QUERY, {
    variables: {
      id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p error={error} />;
  console.log(data);
  const { User } = data;
  console.log(User);
  return (
    <div>
      <h2>{User.name}</h2>
      <p>{User.email}</p>
    </div>
  );
}

export { SINGLE_USER_QUERY };
