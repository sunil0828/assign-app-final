import { useQuery } from "@apollo/client";
import { CURRENT_USER_QUERY } from "../components/UseUser";

export default function ContactPage() {
  const { data } = useQuery(CURRENT_USER_QUERY);
  console.log(data);
  const phoneNumber = data?.authenticatedItem?.phoneNumber;
  return (
    <div>
      <h3>Contact Number : {phoneNumber}</h3>
    </div>
  );
}
