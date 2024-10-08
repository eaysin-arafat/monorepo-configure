import {
  Button,
  Color,
  Margin,
  Select,
  Text,
} from "@sync-workspace/sync-ui-react/lib";
import "./index.css";

function App() {
  return (
    <>
      <Color hexCode="black" height={"sm"} width={"xl"} />
      <Margin bottom left>
        <Text size="sm">Text</Text>
      </Margin>
      <Button onClick={() => {}} title="BUtton Title">
        Button
      </Button>

      <Select
        key={Date.now()}
        label="Please Select Option"
        options={[
          { label: "Red", value: "red" },
          { label: "Green", value: "green" },
          { label: "Blue", value: "blue" },
        ]}
        onOptionSelected={console.log}
      />
    </>
  );
}

export default App;
