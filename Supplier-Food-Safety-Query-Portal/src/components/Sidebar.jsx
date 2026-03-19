export default function Sidebar({ current, setPage }) {
    return (
      <aside className="sidebar">
        <div className="logo-area">
          <div className="logo">Supplier<span>IQ</span></div>
        </div>
  
        <nav className="nav">
          <div className="nav-item" onClick={() => setPage("dashboard")}>
            Dashboard
          </div>
  
          <div className="nav-item" onClick={() => setPage("suppliers")}>
            Suppliers
          </div>
  
          <div className="nav-item" onClick={() => setPage("newquery")}>
            Raise Query
          </div>
  
          <div className="nav-item" onClick={() => setPage("queries")}>
            Track Queries
          </div>
        </nav>
      </aside>
    );
  }