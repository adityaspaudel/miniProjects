import { useEffect, useRef } from "react";

export default function useInfiniteScroll({ loading, hasMore, onLoadMore }) {
  const observerRef = useRef(null);

  useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasMore) {
          onLoadMore();
        }
      },
      { threshold: 1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [loading, hasMore]);

  return observerRef;
}
