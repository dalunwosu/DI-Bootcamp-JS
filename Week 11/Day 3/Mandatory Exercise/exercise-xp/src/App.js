import BuggyCounter from "./components/BuggyCounter";
import ErrorBoundary from "./ErrorBoundary";
import Color from "./components/Color";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h3>
          Click on the numbers to increase the counters. The counter is
          programmed to throw error when it reaches 5. This simulates a
          JavaScript error in a component.
        </h3>
        <hr></hr>
        <div>
          <p>
            These two counters are inside the same error boundary. If one
            crashes, the error boundary will replace both of them.
          </p>

          <ErrorBoundary>
            <BuggyCounter />
            <BuggyCounter />
          </ErrorBoundary>
        </div>

        <hr></hr>
        <div>
          <p>
            These two counters are each inside of their own error boundary. So
            if one crashes, the other is not affected.
          </p>
          <ErrorBoundary>
            <BuggyCounter />
          </ErrorBoundary>
        </div>

        <div>
          <ErrorBoundary>
            <BuggyCounter />
          </ErrorBoundary>
        </div>
        <hr></hr>
        <div>
          <p>
            This counter is not inside of boundary. So if crashes, all other
            components are deleted.
          </p>

          <BuggyCounter />
          <ErrorBoundary />
        </div>
        <hr></hr>
      </header>
      <div>
        <header>
          <Color />
        </header>
      </div>
      <hr></hr>
      <div>
        <header>
          <Color />
          {/* <Child/> */}
        </header>
      </div>
    </div>
  );
}

export default App;
