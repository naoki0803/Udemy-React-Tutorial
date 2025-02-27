const Example = () => {
    // 練習用
    const arr1: number[] = [1, 2, 3];
    const arr2: string[] = ["hello", "bye"];
    const arr3: Array<number> = [1, 2, 3];
    const arr4: (string | number)[] = ["hoge", "hoge", 1, 2, 3];
    const arr5: Array<string | number> = [1, 2, 3];

    const obj: {
        name: string;
        age: number;
        hobbies: "hoge" | "moge" | "piyo";
    } = { name: "hoge", age: 12, hobbies: "piyo" };

    type Hobbies = "hoge" | "moge" | "piyo";

    const obj2: {
        name: string;
        age: number;
        hobbies: Hobbies;
    } = { name: "hoge", age: 12, hobbies: "piyo" };

    type NestObj = {
        name: string;
        age: number;
        affiliation: { department: string; section: string };
    };

    const nestObj: NestObj = {
        name: "hoge",
        age: 23,
        affiliation: { department: "◯◯事業本部", section: "◯◯課" },
    };
    // console.log("🚀 ~ Example ~ nestObj:", nestObj);

    type Person = { name: string; age: number };
    type OptionalObjPerson = { name: string; age?: number };

    // const person: Person = { name: "hoge" }; // error
    const person: OptionalObjPerson = { name: "hoge" }; // noError

    const users: Person[] = [
        { name: "hoge", age: 3 },
        { name: "moge", age: 23 },
        { name: "piyo", age: 51 },
    ];
};

export default Example;
