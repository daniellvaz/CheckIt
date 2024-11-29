import { Home } from "@/pages/home";

import { Header } from "@/components/surfaces/header";
import { useEffect, useState } from "react";
import { Loading } from "./components/surfaces/loading";

function App() {
  const [isScreenEnabled, setIsScreenEnabled] = useState(false);

  useEffect(() => {
    setInterval(() => setIsScreenEnabled(true), 3000);
  }, []);

  return isScreenEnabled ? (
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-50">
      <Header />
      <Home />
    </div>
  ) : (
    <Loading />
  );
}

export default App;
