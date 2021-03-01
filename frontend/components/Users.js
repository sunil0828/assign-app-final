import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { perPage } from "../config";
import User from "./User";

export const ALL_USERS_QUERY = gql`
  query ALL_USERS_QUERY($skip: Int = 0, $first: Int) {
    allUsers(first: $first, skip: $skip) {
      id
      name
      email
      phoneNumber
    }
  }
`;
export default function Users({ page }) {
  const { data, error, loading } = useQuery(ALL_USERS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data);
  return (
    <div>
      {data?.allUsers.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}
