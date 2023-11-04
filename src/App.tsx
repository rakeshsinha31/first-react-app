import ListGroup from "./components/ListGroup";
import Button from "./button";
import { Alert } from "./components/Alert";
import { useState } from "react";

const items = ["Delhi", "Mumbai", "Banglore"];

const handleSelectItem = (item: string) => {
  console.log(item);
};

function App() {
  let [alertVisible, setAlertVisible] = useState(true);

  return (
    <>
      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisible(false)}>Alert</Alert>
        )}
      </div>
      <div>
        <Button
          onClick={() => {
            setAlertVisible(true);
          }}
        >
          My Button
        </Button>
      </div>
    </>
  );
}

export default App;
