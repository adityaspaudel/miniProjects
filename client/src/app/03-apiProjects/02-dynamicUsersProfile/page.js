import Link from "next/link";

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

export default async function Home() {
  const users = await getUsers();

  return (
    <div className="bg-slate-300 text-black flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center w-full max-w-2xl p-4">
        <h1 className="text-xl font-bold mb-6">Dynamic Users</h1>

        <div className="flex flex-col gap-3 w-full">
          {users.map((user) => (
            <Link
              key={user.id}
              href={`/apiProjects/dynamicUsersProfile/users/${user.id}`}
              className="border border-black p-3 rounded hover:bg-slate-400 transition"
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
