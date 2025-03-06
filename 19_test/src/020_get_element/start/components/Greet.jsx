const Greet = () => {
    return (
        <div>
            <form>
                <h1 className="h1EL">おはよう</h1>
                <input type="radio" />
                <label htmlFor="fullname">氏名</label>
                <input id="fullname" type="text" placeholder="氏名" />
                <button>ボタン１</button>
                <button>ボタン２</button>
                <img src="/logo512.png" alt="React Logo" />
                <h2>おはよう</h2>
            </form>
        </div>
    );
};

export default Greet;
