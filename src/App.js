import "./styles.css";
import { Counter } from "./components/Counter";
import Watch from "./components/Watch";
import { StopWatch } from "./components/StopWatch";
import { Popup } from "./components/popup/Popup";
import { InfiniteScroll1 } from "./components/infiniteScrolling/InfiniteScroll1";
import { InfiniteScroll2 } from "./components/infiniteScrolling/InfiniteScroll2";
import { InfiniteScroll3 } from "./components/infiniteScrolling/InfiniteScroll3";
import Datafetching from "./components/Datafetching";

export default function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Watch /> */}
      {/* <StopWatch /> */}
      {/* <Popup /> */}
      {/* <InfiniteScroll1 /> */}
      {/* <InfiniteScroll2 /> */}
      {/* <InfiniteScroll3 /> */}
      <Datafetching />
      {/* <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "100px",
            width: "100px",
            backgroundColor: "teal",
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        ></div>
      </div> */}
    </div>
  );
}
