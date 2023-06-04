import Image from "next/image";
import Link from "next/link";

const Users = ({ users }) => {
  return (
    <ul className="container">
      <Image src="/images/image1.jpg" width={500} height={500} alt="Manzara" />
      {users.map((user) => (
        <Link href={`/users/${user?.id}`} key={user.id}>
          <li style={{ cursor: "pointer" }}>{user.name}</li>
        </Link>
      ))}
    </ul>
  );
};

export default Users;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/users");
  const users = await res.json();
  return {
    props: {
      users,
    },
  };
};
