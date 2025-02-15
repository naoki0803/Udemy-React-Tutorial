// export default SSR = () => {
//     return <div> SSR Page</div>;
// };
export default function SSR() {
    return (
        <div>
            http://localhost:4020/010_SSR のページ
            <p>/layout.js と/010_SSR/layout.js のスタイルが適用される</p>
        </div>
    );
}
