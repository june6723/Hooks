import DeviceOrientation from "./hooks/useDeviceOrientation/useDeviceOrientation";
import Favicon from "./hooks/useFavicon/useFavicon";
import Geolocation from "./hooks/useGeolocation/useGeolocation";
import KeyPress from "./hooks/useKeyPress/useKeyPress";
import LocalStorage from "./hooks/useLocalStorage/useLocalStorage";
import MousePosotion from "./hooks/useMousePosition/useMousePosition";
import Online from "./hooks/useOnline/useOnline";
import LockScrollScreen from "./hooks/useLockScroll/useLockScroll";

function App() {
  return (
    <div style={{ height: "200vh" }} className="App">
      <h1>SuperHooks!</h1>
      <DeviceOrientation />
      <Favicon />
      <Geolocation />
      <KeyPress />
      <LocalStorage />
      <MousePosotion />
      <Online />
      <LockScrollScreen />
    </div>
  );
}

export default App;
