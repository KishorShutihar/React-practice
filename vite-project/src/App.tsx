import { ListGroup } from "./components/ListGroup";
import { Button } from "./components/Button";
import { Like } from "./components/Like";

function App() {
  const countries = ["Nepal", "India", "China", "Pakistan"];

  return (
    <>
      {/* <ListGroup
        items={countries}
        heading="Countries"
        onSelectItem={() => console.log("Hello")}
      /> */}
      <Like onClick={() => console.log("Clicked")} />
    </>
  );
}

export default App;
