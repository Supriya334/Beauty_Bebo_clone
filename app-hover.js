import { useState } from "react";
import "./App.css";
import { Box, Flex } from "@chakra-ui/react";

function App() {
  const [isHovered, setIsHovered] = useState(false);

  const hoveredStyles = {
    backgroundColor: "blue",
    transition: "all 1s ease",
    cursor: "pointer",
  };

  function mouseEntered() {
    setIsHovered(true);
  }
  function mouseLeft() {
    setIsHovered(false);
  }

  return (
    <div className="App">
      <Flex border="1px solid red" p="10px">
        <Box _hover={hoveredStyles} opacity={isHovered?"0":"100%"} border="1px solid blue" p="10px">
          Hover over this to change color. this is a Chakra Box
        </Box>

        <div
          onMouseEnter={() => {
            console.log("mouse entered");
            mouseEntered();
          }}
          onMouseLeave={mouseLeft}
          style={{transition:"all 1s ease" ,backgroundColor: isHovered?"blue":null, cursor: isHovered?"pointer":null}}
        >
          Hover over this to change color. this is a JSX Div
        </div>
      </Flex>
    </div>
  );
}

export default App;
