import Link from "next/link";

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

export default async function Home() {
  const users = await getUsers();

  return (
    <div>
      <h1>Dynamic Users (App Router)</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/apiProjects/dynamicUsersProfile/users/${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
