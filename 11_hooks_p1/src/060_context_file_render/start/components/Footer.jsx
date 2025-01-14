import { useUpdateTheme } from "../context/ThemeContext";

const Footer = () => {
    // Footer内では更新陽関数のみ利用しているが、
    // useTheme() は <ThemeContext.Provider value={[theme, setTheme]}> と定義されており、
    // state を保持しているので、別コンポーネントで状態が更新されると、再レンダリングされてしまう
    // const [, setTheme] = useTheme();
    // console.log("footer");

    // ThemeContext 内で更新関数だけに切り分けたuseUUpdateTheme を作成することで、再レンダリングがされなくなる
    const setTheme = useUpdateTheme();
    return (
        <footer>
            <div>footer</div>
        </footer>
    );
};

export default Footer;
