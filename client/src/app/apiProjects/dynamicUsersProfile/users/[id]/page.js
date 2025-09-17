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
    <div>
      <h1>{user.name}</h1>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>

      <Link href="/apiProjects/dynamicUsersProfile">⬅ Back to Users</Link>
    </div>
  );
}
