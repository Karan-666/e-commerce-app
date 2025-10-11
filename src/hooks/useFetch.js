// creating our custom hook here
//A custom hook is a special function in React that starts with the word use

import { useState, useEffect } from "react";

function UseFetch(url) {
  // this will hold product data
  const [data, setData] = useState(null);

  // This will be true while we wait for data.
  const [loading, setLoading] = useState(true);

  // This will hold an error message if something goes wrong.
  const [error, setError] = useState(null);

  // We used useEffect to handle side effect like api calling
  useEffect(() => {
    // we defined async function to call api
    async function apiCall() {
    // using try catch block to handle error
      try {
        // we set loading to true just before we start fetching..
        setLoading(true);
        const res = await fetch(url); // returns stream data

        // We check if the response was successful. If not, something went wrong with the URL or network.
        if (!res.ok) {
          // If the response is not ok, we create a new error with a helpful message.
          throw new Error(`This is an HTTP error: The status is ${response.status}`);
        }

        const jsonData = await res.json(); // returns api data to json object

        // saving api data to state variable
        // saving response in jsonData.products as the dummyJson API return product in key named "products"
        //Set the data to jsonData.products. If that is undefined (which it will be for a single product), then set the data to jsonData itself.
        //We check if the response has a 'products' key. If it does, it's a list. If not, it's a single product.
        setData(jsonData.products || jsonData);
        setError(null);
      } catch (err) { 
        // we catch the error here and save it to error state
        setError(err);
      } finally {
        // finally block always runs.
        // So initially loading will be true, after code runs, it will get false
        setLoading(false);
      }
    }
    apiCall();
  }, [url]); // using url in dependency array, it means the code inside useEffect runs when the url changes

  return {data, loading, error};
}

export default UseFetch;
