const getPostsData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos")
  return res.json();
}

const getUsersData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json();
}

const getDogsData = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    cache: "no-store",
  });
  return res.json();
}

export default async function ListOfPosts() {
  const [posts, users, dogs] = await Promise.all([
    getPostsData(),
    getUsersData(),
    getDogsData(),
  ]);
  
  return (
    <div>
      <img src={dogs.message} alt="dog" width={300} height={300} />
      {posts.map((post: any) => {
          return <p>{post.title}</p>;
        })}
      <div>
        {users.map((user: any) => {
          return <p> {user.name} </p>
        })}
      </div>
    </div>
  );
}