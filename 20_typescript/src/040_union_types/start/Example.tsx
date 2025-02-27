const Example = () => {
    // 練習用
    let strOrNum: string | number = "Hello";
    strOrNum = 111;
    console.log("🚀 ~ Example ~ strOrNum:", strOrNum);

    let strOrNumOrBool: string | number | boolean = true;
    console.log("🚀 ~ Example ~ strOrNumOrBool:", strOrNumOrBool);

    type HelloOrNum = "Hello" | number;
    let hello: HelloOrNum = "Hello";
    hello = 123;
    console.log("🚀 ~ Example ~ hello:", hello);

    type DayOfWeek = "Monday" | "Tuesday";

    let day: DayOfWeek = "Tuesday";
    console.log("🚀 ~ Example ~ day:", day);
};

export default Example;
