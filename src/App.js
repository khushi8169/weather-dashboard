import React, { useState } from 'react';

const API_KEY = '*************************';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    if (!city) return;
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await res.json();
    setWeather(data);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🌤️ Weather Dashboard</h1>

      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={styles.input}
        />
        <button onClick={getWeather} style={styles.button}>Get Weather</button>
      </div>

      {weather && weather.main && (
        <div style={styles.card}>
          <h2>{weather.name}</h2>
          <p>🌡️ Temperature: <strong>{weather.main.temp}°C</strong></p>
          <p>🌥️ Condition: <strong>{weather.weather[0].description}</strong></p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '30px',
    background: 'linear-gradient(to right, #e0eafc, #cfdef3)',
    minHeight: '100vh',
  },
  title: {
    color: '#333',
    marginBottom: '20px',
  },
  inputContainer: {
    marginBottom: '30px',
  },
  input: {
    padding: '10px',
    width: '200px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginRight: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  card: {
    backgroundColor: '#ffffffdd',
    padding: '20px',
    borderRadius: '12px',
    display: 'inline-block',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    marginTop: '20px',
  },
};

export default App;
