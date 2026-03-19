import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./components/pages/Dashboard";
import Suppliers from "./components/pages/Suppliers";
import NewQuery from "./components/pages/NewQuery";
import Queries from "./components/pages/Queries";

export default function App() {
  const [page, setPage] = useState("dashboard");

  const renderPage = () => {
    switch (page) {
      case "dashboard":
        return <Dashboard />;
      case "suppliers":
        return <Suppliers />;
      case "newquery":
        return <NewQuery />;
      case "queries":
        return <Queries />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="shell">
      <Sidebar current={page} setPage={setPage} />
      <main className="main">
        <Topbar page={page} setPage={setPage} />
        <div className="content">{renderPage()}</div>
      </main>
    </div>
  );
}