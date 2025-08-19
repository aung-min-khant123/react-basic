import React, { useEffect, useState } from 'react'

function ApiData3() {
    const [carts, setCarts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect (() => {
        const fetchData = async () => {
            try{
                const res = await fetch("https://dummyjson.com/carts");
                const result = await res.json();
                console.log("result", result);
                setCarts(result?.carts)
            }catch(err){
                setError(err.message)
            }finally{
                setLoading(false)
            }
        };
        fetchData();
    },[]);
    console.log("carts" , carts)
    if(loading) return <p>Loading......</p>
    if(error) return <p>Error: {error}</p>

  return (
        <>
        <h2>API</h2>

        {/* {
          posts.map((post, index) => {
            return  <h3 key={index}>{post.title}</h3>   
            
          })
        } */}
        {
          carts.map((cart, index) => {
            return  <h3 key={index}>{cart.id}</h3> 
            
          })
        }
         {
          carts.map((cart, index) => {
            return  <h3 key={index}>{cart.total}</h3> 
            
          })
        }
         {
          carts.map((cart, index) => {
            return  <h3 key={index}>{cart.userId}</h3> 
            
          })
        }
        </>
  ); 
}

export default ApiData3;