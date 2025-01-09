const Example = () => {
    // POINT 関数型
    // （値の）状態と処理を分離して管理
    // A(data) -> B(data) -> C(data) -> 結果
    // ★ 状態と処理は切り離す
    const nums = [1, 2, 3];
    const sum = (arry) => arry.reduce((accu, curr) => accu + curr);

    // POINT オブジェクト指向型
    // 状態（データ）と処理を対で管理
    // obj.method(); -> 結果
    const numObj = {
        nums: [1, 2, 3],
        sum() {
            const nums = this.nums;
            let sumValue = 0;

            for (let i = 0; i < nums.length; i++) {
                sumValue += nums[i];
            }

            return sumValue;
        },
    };

    return (
        <>
            <h3>状態管理と処理を分離</h3>
            <p>状態（データ）と処理（やりたいこと）は切り離す</p>

            <p>手続き型: numObj.sum()で記述 → {numObj.sum()}</p>
            <p>関数型き型: sum(nums)で記述 → {sum(nums)}</p>
        </>
    );
};

export default Example;
