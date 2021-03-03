import Link from "next/link";
import SignOut from "./SignOut";
import NavStyles from "./styles/NavStyles";
import useUser from "./UseUser";

export default function Navbar() {
  const user = useUser();
  return (
    <NavStyles>
      {user && (
        <>
          <Link href="/profile">Profile</Link>
          <Link href="/users">Users</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/addUser">Add User</Link>
          <SignOut />
        </>
      )}
      {!user && (
        <>
          <Link href="/signin">Signin</Link>
          <Link href="/signup">Signup</Link>
        </>
      )}
    </NavStyles>
  );
}
