
import Link from "next/link";

async function getUser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
}

export default async function UserDetail({ params }) {
  const { id } = params;
  const user = await getUser(id);

  return (
    <div className="bg-slate-100 min-h-screen w-screen flex justify-center items-center p-6 text-black ">
      <div className="bg-emerald-400 shadow-xl rounded-2xl p-6 w-full max-w-lg space-y-4">
        {/* Name */}
        <h1 className="text-2xl font-bold text-center ">
          {user.name}
        </h1>
        <hr className="border-black" />

        {/* Basic Info */}
        <div className="space-y-2">
          <p>
            <strong>Email:</strong>{" "}
            <span className="text-blue-700">{user.email}</span>
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href={`https://${user.website}`}
              
              className="text-blue-600 hover:underline"
            >
              {user.website}
            </a>
          </p>
        </div>

        {/* Address */}
        <div className="bg-slate-50 p-3 rounded-lg border">
          <h2 className="font-semibold text-gray-700">📍 Address</h2>
          <p>
            {user.address.suite}, {user.address.street}
          </p>
          <p>
            {user.address.city}, {user.address.zipcode}
          </p>
          <p>
            <strong>Geo:</strong> {user.address.geo.lat}, {user.address.geo.lng}
          </p>
        </div>

        {/* Company */}
        <div className="bg-slate-50 p-3 rounded-lg border">
          <h2 className="font-semibold text-gray-700">🏢 Company</h2>
          <p className="font-medium">{user.company.name}</p>
          <p className="italic">"{user.company.catchPhrase}"</p>
          <p className="text-sm text-gray-600">{user.company.bs}</p>
        </div>

        {/* Back Button */}
        <div className="text-center pt-4">
          <Link
            href="/apiProjects/dynamicUsersProfile"
            className="text-emerald-700 hover:underline font-medium"
          >
            ⬅ Back to Users
          </Link>
        </div>
      </div>
    </div>
  );
}
