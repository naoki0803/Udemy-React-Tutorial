class User {
    public name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getAre(): number {
        return this.age;
    }
}

const Example = () => {
    // 練習用
    const user = { name: "Ichiro", age: 45 };
    const user1 = new User("Taro", 30);

    return (
        <>
            <div>
                <h2>オブジェクトを利用した場合</h2>
                <p>名前:{user.name}</p>
                <p>年齢:{user.age}</p>
            </div>

            <div>
                <h3>ソースコード</h3>
                <pre
                    style={{
                        backgroundColor: "#f5f5f5",
                        padding: "10px",
                        borderRadius: "5px",
                        overflowX: "auto",
                    }}
                >
                    <code>
                        {`<div>
    <h2>オブジェクトを利用した場合</h2>
    <p>名前:{user.name}</p>
    <p>年齢:{user.age}</p>
</div>
`}
                    </code>
                </pre>
            </div>

            <div>
                <h2>クラスを利用した場合</h2>
                <p>名前:{user1.name}</p>
                <p>年齢:{user1.getAre()}</p>
            </div>

            <div>
                <h3>ソースコード</h3>
                <pre
                    style={{
                        backgroundColor: "#f5f5f5",
                        padding: "10px",
                        borderRadius: "5px",
                        overflowX: "auto",
                    }}
                >
                    <code>
                        {`<div>
    <h2>クラスを利用した場合</h2>
    <p>名前:{user1.name}</p>
    <p>年齢:{user1.getAre()}</p>
</div>
`}
                    </code>
                </pre>
            </div>
        </>
    );
};

export default Example;
