const Example = () => {
    // 練習用
    type User = {
        name: string;
        age: number;
    };

    const user1: User = {
        name: "hoge",
        age: 35,
    };

    type UserName = string;
    type UserAge = number;
    type UserGender = "man" | "woman" | "others";

    type UserProfile = {
        name: UserName;
        age: UserAge;
        gender: UserGender;
    };

    const user2: UserProfile = {
        name: "hoge",
        age: 23,
        gender: "woman",
    };
};

export default Example;
