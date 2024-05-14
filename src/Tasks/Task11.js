import React, { useState, useEffect } from 'react';

const DateFilterExample = () => {
  const [dateTimeList, setDateTimeList] = useState([]);

  // Example useEffect hook to fetch date-time strings from backend
  useEffect(() => {
    // Fetch date-time strings from backend API
    // For this example, we're simulating a fetch request with a timeout
    const fetchData = async () => {
      // Simulate API response delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Example date-time strings received from backend
      const fetchedDateTimeList = [
        "2024-04-17T10:00:00", // Example date-time strings
        "2024-04-17T12:00:00",
        "2025-05-12T08:00:00",
        "2024-04-18T09:00:00",
        "2024-04-18T14:00:00",
        "2026-05-19T02:00:06",
        "2026-05-19T02:00:08"
        // Add more date-time strings as needed
      ];

      // Sort the fetched date-time strings in descending order
      const sortedDateTimeList = fetchedDateTimeList.sort((a, b) => new Date(b) - new Date(a));

      // Update state with sorted date-time strings
      setDateTimeList(sortedDateTimeList);
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div>
      <h2>Date Filter Example</h2>
      <ul>
        {dateTimeList.map((dateTimeString, index) => (
          <li key={index}>{dateTimeString}&nbsp;&nbsp;</li>
        ))}
      </ul>
    </div>
  );
};

export default DateFilterExample;
