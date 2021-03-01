import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Link from "next/link";
import { perPage } from "../config";
import PaginationStyles from "./styles/PaginationStyles";

export const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    _allUsersMeta {
      count
    }
  }
`;

export default function Pagination({ page }) {
  const { data, error, loading } = useQuery(PAGINATION_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p error={error} />;
  const { count } = data._allUsersMeta;
  const pageCount = Math.ceil(count / perPage);
  return (
    <PaginationStyles>
      <Link href={`/users/${page - 1}`}>
        <a aria-disabled={page <= 1}>Prev</a>
      </Link>
      <p>
        Page {page} of {pageCount}
      </p>
      <p>{count} Total Users</p>
      <Link href={`/users/${page + 1}`}>
        <a aria-disabled={page >= pageCount}>Next</a>
      </Link>
    </PaginationStyles>
  );
}
