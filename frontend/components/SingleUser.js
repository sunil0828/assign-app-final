import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import ErrorMessage from "./ErrorMessage";

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
  if (error) return <ErrorMessage error={error} />;
  const { User } = data;
  return (
    <div>
      <h2>
        Name: <span>{User.name}</span>
      </h2>
      <p>
        Email: <span>{User.email}</span>
      </p>
      <p>
        Contact Number: <span>{User.phoneNumber}</span>
      </p>
    </div>
  );
}

export { SINGLE_USER_QUERY };
