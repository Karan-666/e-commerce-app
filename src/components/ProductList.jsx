import React from 'react'
import UseFetch from '../hooks/useFetch'

function ProductList() {

  // destructuring the data from the custom hook.
  const {data , loading, error} = UseFetch('https://dummyjson.com/products')

  // check loading status and showing loading
  if(loading){
    return(
      <div className="text-center mt-8">
        Loading.....
      </div>
    )
  }

  // checking error status and showing error
  if(error){
    return(
      <div className="text-center mt-8 text-red-500">
        Error: {error}
      </div>
    )
  }

  // We will check if the products array is empty.
  if (!data || data.length === 0) {
    return <div className="text-center mt-8">No products found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Products</h1>
      {JSON.stringify(data)}
    </div>
  )
}

export default ProductList
