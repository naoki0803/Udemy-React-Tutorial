import { useState, useContext, createContext } from "react";

// 状態のみ
const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

// 更新関数のみ (再レンダリングされない)
const ThemeUpdateContext = createContext();
export const useUpdateTheme = () => useContext(ThemeUpdateContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeUpdateContext.Provider value={setTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    );
};
