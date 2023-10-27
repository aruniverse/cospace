import { Key, useEffect, useState } from "react";
import { ModeToggle } from "./components/mode-toggle";
import SearchBar from "./components/search";
import { ScrollArea } from "./components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Separator } from "./components/ui/separator";
// import "./App.css";

function App() {
  const [workspaces, setWorkspaces] = useState();
  const [dependencies, setDependencies] = useState();

  useEffect(() => {
    const fetchLockfile = async () => {
      const response = await fetch("http://localhost:8765/api/lockfile");
      const { workspaces, lockfile } = await response.json();
      console.log(workspaces);
      console.log(lockfile);
      setWorkspaces(workspaces);
      setDependencies(lockfile);
    };
    fetchLockfile().catch(console.error);
  }, []);

  return (
    <>
      <ModeToggle />

      <Tabs defaultValue="workspaces" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="workspaces">Workspaces</TabsTrigger>
          <TabsTrigger value="dependencies">Dependencies</TabsTrigger>
        </TabsList>
        <SearchBar />
        <TabsContent value="workspaces">
          <ScrollArea className="h-[900px] w-[550px] rounded-md border p-4">
            {/* <pre>{JSON.stringify(workspaces, null, 2)}</pre> */}
            {workspaces?.map(
              (workspace: {
                path: Key | null | undefined;
                name: string;
                packageJson: { version: string };
              }) => (
                <>
                  <div key={workspace.path} className="text-sm">
                    {`${workspace.name}@${workspace.packageJson.version}`}
                  </div>
                  <Separator className="my-2" />
                </>
              )
            )}
          </ScrollArea>
        </TabsContent>
        <TabsContent value="dependencies">
          <ScrollArea className="h-[900px] w-[550px] rounded-md border p-4">
            {/* <pre>{JSON.stringify(dependencies, null, 2)}</pre> */}
            {dependencies && Object.keys(dependencies)?.map((dep: any) => (
              <>
                <div key={dep} className="text-sm">
                  {dep}
                </div>
                <Separator className="my-2" />
              </>
            ))}
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </>
  );
}

export default App;
