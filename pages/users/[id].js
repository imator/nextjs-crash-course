const User = ({ user }) => {
  return <div className="container">{"User Name: " + user.name}</div>;
};

export default User;

// export const getServerSideProps = async (context) => {
//   console.log(context);

//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${context.params.slug}`
//   );
//   const user = await res.json();
//   return {
//     props: {
//       user,
//     },
//   };
// };

export const getStaticProps = async (context) => {
  console.log(context);

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  );
  const user = await res.json();
  return {
    props: {
      user,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  const userIds = users.map((user) => user.id);
  const paths = userIds.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};
