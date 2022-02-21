# 🌳 Boemly

Boemly is the open source design system of Tree.ly based on [ChakraUI](https://chakra-ui.com/).

## Getting started

Just include the theme provider in the root of your app and start using the Boemly components:

```js
import { Button, BoemlyThemeProvider } from 'boemly';

function App() {
  return (
    <BoemlyThemeProvider>
      <Button>Button</Button>
    </BoemlyThemeProvider>
  );
}

export default App;
```
