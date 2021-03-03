import { useQuery } from "@apollo/client";
import { CURRENT_USER_QUERY } from "./UseUser";

export default function Profile() {
  const { data } = useQuery(CURRENT_USER_QUERY);
  const name = data?.authenticatedItem?.name;
  return (
    <div>
      Name:
      {name}
    </div>
  );
}
