import { PAGINATION_QUERY } from "../components/Pagination";

export default function paginationField() {
  return {
    keyArgs: false,

    read(existing = [], { args, cache }) {
      const { skip, first } = args;

      const data = cache.readQuery({ query: PAGINATION_QUERY });

      const count = data?._allUsersMeta?.count;

      const page = skip / first + 1;

      const pages = Math.ceil(count / first);

      const users = existing.slice(skip, skip + first).filter((x) => x);

      if (users.length && users.length !== first && page === pages) {
        return users;
      }

      if (users.length !== first) {
        return false;
      }

      if (users.length) {
        return users;
      }

      return false;
    },
    merge(existing, incoming, { args }) {
      const { skip, first } = args;

      const merged = existing ? existing.slice(0) : [];
      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }
      return merged;
    },
  };
}
