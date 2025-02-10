import axios from "axios";
import { useEffect, useState } from "react";

const Example = () => {
    // const [users, setUsers] = useState([]);
    const [users, setUsers] = useState();

    useEffect(() => {
        const getUser = async () => {
            const res = await axios.get("http://localhost:3003/user");
            setUsers(res.data);
        };
        getUser();
    }, []);
    return (
        <div>
            {/* 初回読み込み時、getUser()をawait している状態で、mapを呼び出すと、
                usersがundefined になり mapが実行できずエラーになる為、以下いずれかの処理が必要
                1. useStateの初期値を空配列として定義する
                2. users?.map としてオプショナルチューニング演算子でmapを実行する */}

            {/* {users.map((user) => { */}
            {users?.map((user) => {
                return (
                    <div key={user.id}>
                        <h3>{user.username}</h3>
                        <p>age: {user.age}</p>
                        <p>hobbies: {user.hobbies.join(",")}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Example;
