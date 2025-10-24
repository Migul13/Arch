import React, { useEffect, useState } from 'react';
import PropTypes from '@arc-fusion/prop-types';

const DogFactsTable = ({ customFields }) => {
  const [dogFacts, setDogFacts] = useState([]);

  useEffect(() => {
    const fetchDogFacts = async () => {
      try {
        const response = await fetch(
          `https://dogapi.dog/api/v2/facts?limit=${customFields.factsLimit} || '1'`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDogFacts(data.data || []);
      } catch (error) {
        console.error("Error fetching dog facts:", error);
      }
    };

    fetchDogFacts();
  }, [customFields.factsLimit]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#4CAF50" }}>Dog Facts</h1>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              textAlign: "left",
            }}
          >
            <th style={{ padding: "10px" }}>ID</th>
            <th style={{ padding: "10px" }}>Type</th>
            <th style={{ padding: "10px" }}>Fact</th>
          </tr>
        </thead>
        <tbody>
          {dogFacts.length > 0 ? (
            dogFacts.map((fact) => (
              <tr
                key={fact.id}
                style={{
                  backgroundColor: "#f9f9f9",
                  borderBottom: "1px solid #ddd",
                }}
              >
                <td style={{ padding: "10px" }}>{fact.id}</td>
                <td style={{ padding: "10px" }}>{fact.type}</td>
                <td style={{ padding: "10px" }}>{fact.attributes.body}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="3"
                style={{
                  textAlign: "center",
                  padding: "20px",
                  backgroundColor: "#ffdddd",
                }}
              >
                Loading dog facts...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

DogFactsTable.propTypes = {
  customFields: PropTypes.shape({
    factsLimit: PropTypes.string.tag({
      label: 'factsLimit',
      description: 'Specify number of facts to display',
    }),
  }),
};

export default DogFactsTable;
