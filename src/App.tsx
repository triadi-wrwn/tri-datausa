import useDocumentTitle from "@/lib/hooks/use-document-title";

import MainRoutes from "./main-routes";

import "./App.css";

function App() {
  useDocumentTitle(`DATA USA - Dashboard`, true);

  return <MainRoutes />;
}

export default App;
