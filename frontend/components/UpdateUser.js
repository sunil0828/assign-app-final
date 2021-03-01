import { useMutation, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import useForm from "../lib/useForm";
import { SINGLE_USER_QUERY } from "./SingleUser";
import Form from "./styles/Form";

const UPDATE_USER_MUTATION = gql`
  mutation UPDATE_USER_MUTATION($id: ID!, $name: String, $phoneNumber: Int) {
    updateUser(id: $id, data: { name: $name, phoneNumber: $phoneNumber }) {
      id
      name
      phoneNumber
    }
  }
`;

export default function UpdateUser({ id }) {
  const { data, loading, error } = useQuery(SINGLE_USER_QUERY, {
    variables: {
      id,
    },
  });
  const [
    updateUser,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_USER_MUTATION);
  const { inputs, handleChange, resetForm } = useForm(data?.User);
  console.log(inputs);
  if (loading) return <p>Loading...</p>;

  return (
    <Form
      onSubmit={async (e) => {
        // e.preventDefault();
        const res = await updateUser({
          variables: {
            id,
            name: inputs.name,
            phoneNumber: inputs.phoneNumber,
          },
        }).catch(console.error);
        console.log(res);
      }}
    >
      <h2>Add user account</h2>
      <p error={error || updateError} />
      <fieldset>
        {data?.createUser && <p>User added with {data.createUser.email}...!</p>}
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            id="name"
            placeholder="User Name"
            autoComplete="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="phoneNumber">
          Phone Number
          <input
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="User phoneNumber"
            value={inputs.phoneNumber}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Update User</button>
      </fieldset>
    </Form>
  );
}
