import Link from "next/link";

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

export default async function Home() {
  const users = await getUsers();

  return (
    <div className="flex justify-center bg-slate-200 h-screen w-screen text-black">
      <div className="flex flex-col content-center items-center gap-2 min-h-1/2 w-1/2 bg-emerald-200 p-4 rounded-xl">
        <h1 className="text-4xl font-bold">
          Dynamic Users (App Router) <hr className="border-black" />
        </h1>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="hover:text-blue-400">
              <Link href={`/apiProjects/dynamicUsersProfile/users/${user.id}`}>
                {user.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
