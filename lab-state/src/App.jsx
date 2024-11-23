import React from "react";
import Header from "./Header";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <p>This is an example of Theme Switcher using Context API.</p>
      </main>
    </ThemeProvider>
  );
}

export default App;