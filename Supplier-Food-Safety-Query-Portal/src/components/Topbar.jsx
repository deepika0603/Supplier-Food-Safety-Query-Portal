export default function Topbar({ page, setPage }) {
    return (
      <div className="topbar">
        <div>SupplierIQ › {page}</div>
  
        <div>
          <button onClick={() => setPage("queries")}>
            Notifications
          </button>
  
          <button onClick={() => setPage("newquery")}>
            + Raise Query
          </button>
        </div>
      </div>
    );
  }