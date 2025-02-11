import axios from "axios";

const ENDPOINT_URL = "http://localhost:3003/todo";

const todoApi = {
    async getAll() {
        const result = await axios.get(ENDPOINT_URL);
        return result.data;
    },
    async post(todo) {
        const result = await axios.post(ENDPOINT_URL, todo);
        return result.data;
    },
    async delete(todo) {
        const result = await axios.delete(ENDPOINT_URL + "/" + todo.id);
        return result.data;
    },
    async put(todo) {
        const result = await axios.put(ENDPOINT_URL + "/" + todo.id, todo);
        return result.data;
    },
    async patch(todo) {
        const result = await axios.patch(ENDPOINT_URL + "/" + todo.id, todo);
        return result.data;
    },
};

// todoApi.delete({ id: 6 });
// todoApi.patch({
//     id: "7",
//     content: "テスト",
// });
export default todoApi;
