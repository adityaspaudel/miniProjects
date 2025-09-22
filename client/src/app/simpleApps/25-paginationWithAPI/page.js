"use client";
import React, { useState, useEffect } from "react";

export default function PaginationWithAPI() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  // Fetch posts from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const result = await res.json();
        setData(result);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="h-screen w-screen  bg-slate-300 flex text-black justify-center items-center">
      <div className="flex flex-col content-center items-center min-h-1/2 min-w-1/2 p-4 text-center">
        <h2 className="text-4xl font-semibold mb-4">
          API Pagination Example <hr className="border-black" />
        </h2>
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <>
            {/* Items */}
            <ul className="space-y-3">
              {currentItems.map((post) => (
                <li
                  key={post.id}
                  className="p-3 border rounded text-left shadow-sm bg-amber-100"
                >
                  <h3 className="font-medium">{post.title}</h3>
                  <p className="text-sm text-gray-600">{post.body}</p>
                </li>
              ))}
            </ul>
            {/* Pagination buttons */}
            <div className="flex justify-center items-center gap-2 mt-6">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Prev
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`px-3 py-1 cursor-pointer border rounded ${
                    currentPage === i + 1
                      ? "bg-blue-500 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
