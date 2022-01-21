import { useState, useEffect} from 'react';

function Weather() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://g5l37ru65g.execute-api.eu-central-1.amazonaws.com/Prod/MyResource?TableName=Weather")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result.Items);
            console.log("Loaded:", result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
            console.log("error:", error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.Date + item.CityID} >
              {item.City} [{item.Date}] {item.Temperatures.LowF} - {item.Temperatures.HighF}
            </li>
          ))}
        </ul>
      );
    }

}

export default Weather