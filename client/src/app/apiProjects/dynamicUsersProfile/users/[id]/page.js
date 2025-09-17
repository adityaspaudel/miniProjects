// /app/apiProjects/dynamicUserProfile/users/[id]/page.js
import Link from "next/link";

async function getUser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return res.json();
}
export default async function UserDetail({ params }) {
  const { id } = await params; // ✅ Await the params object
  const user = await getUser(id);

  return (
    <div className="bg-slate-300 h-screen w-screen text-black flex justify-center items-center">
      <div className="flex flex-col gap-2 justify-center items-center bg-emerald-200 rounded-xl min-h-1/2 w-1/2 p-4">
        <h1>
          <strong>
            {user.name}
            <hr className="border-black" />
          </strong>
        </h1>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Website:</strong> {user.website}
        </p>
        <div className="hover:text-blue-600">
          <Link href="/apiProjects/dynamicUsersProfile">⬅ Back to Users</Link>
        </div>
      </div>
    </div>
  );
}
