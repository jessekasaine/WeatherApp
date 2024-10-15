import React, { useEffect, useState } from 'react'

function WeatherCall() {
    const [fetched, setFetched] = useState([]);
    useEffect(() => {
        fetchWeatherData();
    }, [])
    
    async function fetchWeatherData() {
        try {
            //const apiResponse1 = await fetch('https://dummyjson.com/products');
            const apiResponse = await fetch('https://localhost:7176/WeatherForecast');
            const result = await apiResponse.json();
            console.log(result);
            setFetched(result)

            // if (result?.WeatherForecast && result?.WeatherForecast?.length > 0) {
            //     setFetched(result?.WeatherForecast)
            // } else {
            //     setFetched([])
            // }
            
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
      <div className='flex flex-col items-center'>
          <h1 className='mb-5'>Simple Weather Summary</h1>
          <div className='flex flex-col space-y-10'>
              {
                  fetched> 0 ?<p>Fetching data...</p>:
                      fetched.map(fetchedItem =>
                           <p key={fetchedItem.date}>{ fetchedItem.summary}</p>
                      )
              }
              </div>
        </div>
    </div>
  )
}

export default WeatherCall
