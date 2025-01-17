const Input = ({ name, state }) => {
    console.log(state);
    return (
        <div>
            {name}:
            <input
                type="number"
                name={name}
                value={state}
                // onChange={numChangeHandler}
            />
        </div>
    );
};
export default Input;
