import { useMutation } from "@apollo/client";
import useForm from "../lib/useForm";
import ErrorMessage from "./ErrorMessage";
import { SIGNUP_MUTATION } from "./SignUp";
import Form from "./styles/Form";

export default function CreateUser() {
  const { inputs, handleChange, resetForm } = useForm({
    email: "",
    name: "",
    password: "",
  });
  const [signup, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
  });
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);
    const res = await signup().catch(console.error);
    console.log(res);

    console.log({ data, loading, error });
    resetForm();
  }
  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Add user account</h2>
      <ErrorMessage error={error} />
      <fieldset>
        {data?.createUser && <p>User added with {data.createUser.email}...!</p>}
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            placeholder="User Name"
            autoComplete="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="User Email Address"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add User</button>
      </fieldset>
    </Form>
  );
}
