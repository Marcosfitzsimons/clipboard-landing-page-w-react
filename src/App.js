import "./App.css";
import { Header } from "./components/Header";
import { SectionDefault } from "./components/SectionDefault";
import { Main } from "./components/Main";
import { SectionPublicity } from "./components/SectionPublicity";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="app wrapper">
      <Header />

      <SectionDefault
        title="Keep track of your snippets"
        text="        Clipboard instantly stores any item you copy in the cloud, meaning you
        can access your snippets ammediately on all your devices. Our Mac and
        iOS apps will help you organize everything."
      />

      <Main />

      <SectionPublicity />

      <Footer />
    </div>
  );
}

export default App;
