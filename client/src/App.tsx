import { Switch, Route, Router as WouterRouter } from "wouter";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import { Toaster } from "@/components/ui/toaster";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <AppRoutes />
      </WouterRouter>
      <Toaster />
    </>
  );
}

export default App;
