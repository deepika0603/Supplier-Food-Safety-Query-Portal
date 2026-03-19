export default function Dashboard() {
    return (
      <div>
        <h2>Dashboard</h2>
  
        <div className="metrics-grid">
          <div className="metric-card">
            <div>Total Suppliers</div>
            <h1>48</h1>
          </div>
  
          <div className="metric-card">
            <div>Compliance</div>
            <h1>79%</h1>
          </div>
  
          <div className="metric-card">
            <div>Open Queries</div>
            <h1>12</h1>
          </div>
        </div>
      </div>
    );
  }