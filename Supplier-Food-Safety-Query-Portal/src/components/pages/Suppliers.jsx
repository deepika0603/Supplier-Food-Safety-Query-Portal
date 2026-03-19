export default function Suppliers() {
    const data = [
      { name: "Supplier ABC", risk: "HIGH" },
      { name: "Fresh Farms", risk: "LOW" },
      { name: "PackTech", risk: "MED" }
    ];
  
    return (
      <div>
        <h2>Suppliers</h2>
  
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Risk</th>
            </tr>
          </thead>
  
          <tbody>
            {data.map((s, i) => (
              <tr key={i}>
                <td>{s.name}</td>
                <td>{s.risk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }