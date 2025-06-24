import { Route, Switch } from "wouter";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-purple-800 p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-center">مدينة القدية</h1>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </main>
      
      <footer className="bg-gray-800 p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 مدينة القدية. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
