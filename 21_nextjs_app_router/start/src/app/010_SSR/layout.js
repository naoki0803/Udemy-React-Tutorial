export default function SubLayout({ children }) {
    return (
        <div
            style={{
                background: "rgba(255, 60, 0)",
                color: "white",
                padding: "3px",
            }}
        >
            {children}
        </div>
    );
}
