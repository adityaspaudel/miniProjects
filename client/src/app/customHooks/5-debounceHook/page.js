"use client";
import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

export default function UserSearchDebounce() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);

  // 🧠 This is the KEY LINE
  const debouncedQuery = useDebounce(query, 1000);

  useEffect(() => {
    if (!debouncedQuery) return;

    fetch(`https://dummyjson.com/users/search?q=${debouncedQuery}`)
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, [debouncedQuery]); // 👈 NOT query!

  return (
    <div className="max-w-md space-y-3">
      <input
        className="border p-2 w-full"
        placeholder="Search user..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.firstName}</li>
        ))}
      </ul>
    </div>
  );
}
