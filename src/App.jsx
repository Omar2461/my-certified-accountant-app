import MainNavigation from "../components/navigation/MainNavigation";
import Route from "../components/Route";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/homePage";

function App() {
  return (
    <div>
      <MainNavigation />

      <Route path='/'><HomePage/></Route>
      <Route path='AboutPage'><AboutPage/></Route>
    </div>
  );
}
export default App;
