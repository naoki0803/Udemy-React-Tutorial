import axios from "axios";

const ENDPOINT_URL = "http://localhost:3003/todo";

const todoApi = {
    async getAll() {
        const result = await axios.get(ENDPOINT_URL);
        return result.data;
    },
    async psst(todo) {
        const result = await axios.post(ENDPOINT_URL, todo);
        return result.data;
    },
    async delete(todo) {
        const result = await axios.delete(ENDPOINT_URL + "/" + todo.id);
        return result.data;
    },
};

todoApi.delete({ id: "7" });
// todoApi.psst({
//     id: "7",
//     content: "テストの登録",
//     editing: false,
// });
// export default todoApi;
