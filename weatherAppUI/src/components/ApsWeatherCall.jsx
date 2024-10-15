import { useEffect, useState } from 'react';

function AspWeatherCall() {
    const [forecasts, setForecasts] = useState([]);

    useEffect(() => {
        populateWeatherData();
    }, []);

    async function populateWeatherData() {
        const response = await fetch('https://localhost:7176/WeatherForecast');
        const data = await response.json();
        console.log(data);
        setForecasts(data);
    }
    return (
        <div>
            <h1 id="tableLabel">Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {
                forecasts > 0 ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.date}>
                        <td>{forecast.date}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.summary}</td>
                    </tr>
                )}
            </tbody>
        </table> 
            }
        </div>
        // <div>
        //     <h1 id="tableLabel">Weather forecast</h1>
        //     <p>This component demonstrates fetching data from the server.</p>
        //     {
        //         forecasts > 0 ? <p>Loading...</p> :
        //             forecasts.map((forecast) => {
        //                 return <p>{ forecast.summary}</p>
        //             })
        //     }
        // </div>
    );
}

export default AspWeatherCall;