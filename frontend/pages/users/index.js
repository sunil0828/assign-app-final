import { useRouter } from "next/dist/client/router";
import Pagination from "../../components/Pagination";
import Users from "../../components/Users";

export default function PersonsPage() {
  const { query } = useRouter();
  console.log(query);
  const page = parseInt(query.page);
  console.log(page);
  return (
    <div>
      {/* <Pagination page={page || 1} />. */}
      <Users page={page || 1} />
      <Pagination page={page || 1} />
    </div>
  );
}
