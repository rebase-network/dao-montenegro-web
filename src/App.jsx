import About from "./components/about";
import Agenda from "./components/agenda";
import Banner from "./components/banner";
import Speaker from "./components/speaker";
import EventDetail from "./components/event";
import PartiesDetail from "./components/parties";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const sm = useMediaQuery();
  return (
    <>
      <Banner sm={sm} />
      <EventDetail sm={sm} />
      <Agenda sm={sm} />
      <Speaker sm={sm} />
      <PartiesDetail sm={sm} />
      <About sm={sm} />
    </>
  );
}

export default App;
