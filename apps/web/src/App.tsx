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
      <footer className="w-full p-4 text-center text-zinc-500">
        <small>
          <span className="text-lime-500">CheckIt</span> - Make your day simple.
          © | {new Date().getFullYear()} Todos os direitos reservados
        </small>
      </footer>
    </div>
  ) : (
    <Loading />
  );
}

export default App;
