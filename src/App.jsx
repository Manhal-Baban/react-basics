import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <main>
          <Card name="John Doe" age={30} title="CEO" />
          <Card name="Jane Smith" age={25} title="Developer" />
          <Card name="Sam Brown" age={28} title="Designer" />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
