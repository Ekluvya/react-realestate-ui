import Navbar from "./components/Navbar";
import HomePage from "./routes/homePage/homePage";

function App() {
  return (
    <>
      <div className="h-screen max-w-1366 lg:max-w-1280 md:max-w-768 sm:max-w-640 mx-auto px-5 flex flex-col">
        {/* NAvbar */}
        <div>
          <Navbar />
        </div>
        {/* HomePage */}
        <div className="flex-1">
          <HomePage />
        </div>
      </div>
    </>
  );
}

export default App;
