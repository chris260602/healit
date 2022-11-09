import classes from "./App.module.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import MainRoute from "./routes";

function App() {
  return (
    <div className={classes.phoneContainer}>
      <ScrollToTop />
      <MainRoute />
    </div>
  );
}

export default App;
