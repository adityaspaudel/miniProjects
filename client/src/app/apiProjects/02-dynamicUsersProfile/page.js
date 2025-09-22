import Link from "next/link";

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

export default async function Home() {
  const users = await getUsers();

  return (
    <div className="bg-slate-100 text-black flex flex-wrap justify-center items-center w-screen h-screen">
      <div className="flex flex-col content-center items-center p-4 bg-emerald-100">
        <h1 className="text-4xl font-bold mb-6">
          Dynamic Users
          <hr className="border-black" />
        </h1>

        <div className="flex flex-row gap-3 flex-wrap  w-full h-full">
          {users.map((user) => (
            <Link
              key={user.id}
              href={`/apiProjects/02-dynamicUsersProfile/users/${user.id}`}
              className="border border-black p-3 rounded hover:bg-emerald-400 transition"
            >
              <h2 className="font-semibold">{user.name}</h2>
              <p>@{user.username}</p>
              <p>{user.email}</p>
              <p>{user.company.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
