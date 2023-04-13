import React from 'react'
import { Link } from 'react-router-dom'
import { useGetMoviesQuery } from '../features/APISlice'


export default function Home() {
const {data, isLoading, error}=useGetMoviesQuery()

  return (
    <div>
      <h1>Home</h1>
    
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
      {isLoading && <h1>Loading...</h1>}
      {data && <div>
        
        {data?.map((item) => (
          <div key={item.id}>
            <p>{item.id}</p>
            <h1>{item.title}</h1>
            <p>{item.genre}</p>
            <p>{item.plot}</p>
            <p>{item.stars}</p>
            <img src={item.image}alt='' />
            
            <Link to={'/${item.id}'}>
            <button>Show Details</button>
            </Link>

            <button onClick={() => alert(item.id)}>❤️</button>
            <hr/>
          </div>
        ))}
        </div>}
    </div>
  )
}