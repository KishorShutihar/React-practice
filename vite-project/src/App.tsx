import { ListGroup } from "./components/ListGroup";
import { Button } from "./components/Button";
import { Like } from "./components/Like";
import { useState } from "react";
import { produce } from "immer";

function App() {
  const countries = ["Nepal", "India", "China", "Pakistan"];
  const [arrOfObj, setArrOfObj] = useState([
    { name: "Kishor", age: 25, bachelor: true },
    { name: "Rohit", age: 25, bachelor: false },
  ]);

  const handleClick = () => {
    //add
    // setArrOfObj([...arrOfObj, { name: "samiskhya", age: 30, bachelor: false }]);

    // setArrOfObj(
    //   produce((draft) => {
    //     draft.push({ name: "samiskhya", age: 30, bachelor: false });
    //   })
    // );

    //update
    // setArrOfObj(
    //   arrOfObj.map((arr) => {
    //     if (arr.name == "Kishor") {
    //       arr.name = "Kishan";
    //     }
    //     return arr;
    //   })
    // );

    // setArrOfObj(
    //   produce((draft) => {
    //     const findable = draft.find((e) => e.name == "Kishor");
    //     if (findable) {
    //       findable.name = "Kishan";
    //     }
    //   })
    // );

    //delete
    // setArrOfObj(arrOfObj.filter((arr) => arr.name != "Kishor"));

    setArrOfObj(
      produce((draft) => {
        const someVal = draft.filter((arr) => arr.name !== "Kishor");
        return someVal;
      })
    );
  };

  console.log(arrOfObj);

  return (
    <>
      {/* <ListGroup
        items={countries}
        heading="Countries"
        onSelectItem={() => console.log("Hello")}
      /> */}
      <button onClick={handleClick}>Button</button>
      {arrOfObj.map((value, index) => (
        <p key={index}>{value.name}</p>
      ))}
      <Like onClick={() => console.log("Clicked")} />
    </>
  );
}

export default App;
