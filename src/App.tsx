import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Laws from "@/pages/Laws";
import Contact from "@/pages/Contact";
import Store from "@/pages/Store";
import Admin from "@/pages/Admin";
import Login from "@/pages/Login";
import OwnerDashboard from "@/pages/OwnerDashboard";
import SuperAdmin from "@/pages/SuperAdmin";
import StaticAdmin from "@/pages/StaticAdmin";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen bg-[var(--qiddiya-darker)] text-[var(--qiddiya-text)] font-arabic">
      <Navigation />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/laws" component={Laws} />
          <Route path="/contact" component={Contact} />
          <Route path="/store" component={Store} />
          <Route path="/admin" component={StaticAdmin} />
          <Route path="/login" component={Login} />
          <Route path="/owner" component={OwnerDashboard} />
          <Route path="/super" component={SuperAdmin} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
