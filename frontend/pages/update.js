import UpdateUser from "../components/UpdateUser";

export default function UpdatePage({ query }) {
  console.log(query);
  return (
    <div>
      <UpdateUser id={query.id} />
    </div>
  );
}
