import SingleUser from "../../components/SingleUser";

export default function User({ query }) {
  console.log(query);
  return <SingleUser id={query.id} />;
}
