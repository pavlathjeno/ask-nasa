import { useState, useEffect } from 'react'

export default function apiData() {
  const apiKey = "eybYmEBVfTW9FPK8bOAHGqyunu8ZMERAuHTeqjp4";
  //const apiKey = "DEMO_KEY";
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().substring(0, 10));

    return [apiUrl, selectedDate, setSelectedDate];
}