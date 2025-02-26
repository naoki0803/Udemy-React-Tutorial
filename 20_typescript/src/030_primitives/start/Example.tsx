const Example = () => {
    // 練習用
    let str: string = "";
    str = "Hello";
    console.log("🚀 ~ Example ~ str:", str);

    let num: number;
    num = 123;
    console.log("🚀 ~ Example ~ num:", num);

    let bignum: bigint = 103n;
    console.log("🚀 ~ Example ~ bignum:", bignum);

    let bool: boolean = true;
    console.log("🚀 ~ bool:", bool);

    let nullis: null = null;
    console.log("🚀 ~ Example ~ nullis:", nullis);

    //リテラル型
    let trueVal: true = true;
    console.log("🚀 ~ Example ~ trueVal:", trueVal);

    let num123: 123 = 123;
    console.log("🚀 ~ Example ~ num123:", num123);
    // num123 = 111; // 123意外は入れられない

    let strHello: "Hello" = "Hello";
    console.log("🚀 ~ Example ~ strHello:", strHello);
};

export default Example;
