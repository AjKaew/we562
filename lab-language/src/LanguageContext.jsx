import { createContext, useReducer } from "react";

const LanguageContext = createContext();

const translations = {
  th: { greeting: "สวัสดี", title: "หน้าหลัก" },
  en: { greeting: "Hello", title: "Home" },
};

function languageReducer(state, action) {
  switch (action.type) {
    case "changeLanguage":
      return { ...state, currentLanguage: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const initialState = { currentLanguage: "en", translations };

function LanguageProvider({ children }) {
  const [state, dispatch] = useReducer(languageReducer, initialState);

  return (
    <LanguageContext.Provider value={{ state, dispatch }}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageContext, LanguageProvider };
