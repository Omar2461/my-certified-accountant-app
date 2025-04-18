import MainNavigation from "../components/navigation/MainNavigation";
import Route from "../components/Route";
import HomePage from "./pages/homePage";

function App() {
  return (
    <div>
      <MainNavigation />

      <Route path='/'><HomePage/></Route>
    </div>
  );
}
export default App;
