import { useContext } from "react";
import { LanguageContext, LanguageProvider } from "./LanguageContext";

function AppContent() {
  const { state, dispatch } = useContext(LanguageContext);

  const currentTranslations = state.translations[state.currentLanguage];

  return (
    <div>
      <h1>{currentTranslations.title}</h1>
      <p>{currentTranslations.greeting}</p>
      <button
        onClick={() => dispatch({ type: "changeLanguage", payload: "th" })}
      >
        Switch to Thai
      </button>
      <button
        onClick={() => dispatch({ type: "changeLanguage", payload: "en" })}
      >
        Switch to English
      </button>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
