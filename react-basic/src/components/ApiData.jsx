import React, { useEffect, useState } from 'react'

function ApiData() {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await fetch("https://dummyjson.com/posts");
                const result = await res.json();
                console.log("result", result);
                setPosts(result?.posts);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    console.log("posts", posts);
    if (loading) return <p>loading....</p>;
    if (error) return <p> Error: {error}</p>;
  return (
    <>
        <h2>API Data</h2>

      {posts.map((post, index) => {
            return <h3 key={index}>{post.title}</h3>;
        })} 
    </>
  )
}

export default ApiData;