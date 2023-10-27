import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [lockfile, setLockfile] = useState(null);

  useEffect(() => {
    const fetchLockfile = async () => {
      const response = await fetch("http://localhost:8765/api/lockfile");
      const lockfile = await response.json();
      console.log(lockfile);
      setLockfile(lockfile);
    };
    fetchLockfile().catch(console.error);
  }, []);

  return (
    <>
      <pre>{JSON.stringify(lockfile, null, 2)}</pre>
    </>
  );
}

export default App;
