import React, { useEffect, useState } from "react";

const DataFetcher = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 📝 TODO: Fetch "https://jsonplaceholder.typicode.com/posts"
    // 📝 TODO: Store the result in setPosts
  }, []);

  return (
    <section className="p-6 mt-4 rounded-2xl shadow-lg bg-red-100">
      <h2 className="text-2xl font-bold mb-4">📰 Posts</h2>
      <ul className="list-disc list-inside space-y-2">
        {posts.length === 0 ? (
          <li className="text-gray-500">Loading...</li>
        ) : (
          posts.map((p) => <li key={p.id}>{p.title}</li>)
        )}
      </ul>
    </section>
  );
};

export default DataFetcher;


