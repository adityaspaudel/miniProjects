"use client";

import { useEffect, useState } from "react";
import useInfiniteScroll from "./useInfiniteScroll";

export default function InfinitePosts() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      const limit = 5;
      const skip = (page - 1) * limit;

      const res = await fetch(
        `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`
      );
      const data = await res.json();

      setPosts((prev) => {
        const ids = new Set(prev.map((p) => p.id));
        const unique = data.posts.filter((p) => !ids.has(p.id));
        return [...prev, ...unique];
      });

      setHasMore(data.posts.length > 0);
      setLoading(false);
    };

    fetchPosts();
  }, [page]);

  const loaderRef = useInfiniteScroll({
    loading,
    hasMore,
    onLoadMore: () => setPage((prev) => prev + 1),
  });

  return (
    <div className="p-6 max-w-xl mx-auto">
      {posts.map((post) => (
        <div key={post.id} className="mb-4 p-4 border rounded">
          <h2 className="font-semibold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}

      {hasMore && (
        <div ref={loaderRef} className="text-center p-4">
          {loading && "Loading..."}
        </div>
      )}
    </div>
  );
}
