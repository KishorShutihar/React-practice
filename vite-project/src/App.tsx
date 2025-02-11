import { ListGroup } from "./components/ListGroup";
import { Button } from "./components/Button";
import { Like } from "./components/Like";
import { useState } from "react";
import { produce } from "immer";
import { Cart } from "./components/Cart";
import { NavBar } from "./components/NavBar";
import { ExpandableText } from "./components/ExpandableText";

function App() {
  return (
    <>
      <ExpandableText maxCharacter={150}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
        accusamus sequi vel fuga aut eum magnam quaerat eius distinctio, dolorum
        minus!
      </ExpandableText>
    </>
  );
}

export default App;
