"use client";
import useFetch from "./useFetch";

export default function UsersList() {
  const { data, loading, error } = useFetch("https://dummyjson.com/users");

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data.users.map((user) => (
        <li key={user.id}>
          {user.firstName} {user.lastName}
        </li>
      ))}
    </ul>
  );
}
