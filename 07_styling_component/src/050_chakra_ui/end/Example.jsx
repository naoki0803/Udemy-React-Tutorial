/* POINT Chakra UIのインポート
https://chakra-ui.com/
*/
import { ChakraProvider } from "@chakra-ui/react";

import Todo from "./components/Todo";

const Example = () => {
  // POINT Chakra UIを使用するためにChakraProviderでラップする
  return (
    <>
      <ChakraProvider>
        <Todo />
      </ChakraProvider>
    </>
  );
};

export default Example;
