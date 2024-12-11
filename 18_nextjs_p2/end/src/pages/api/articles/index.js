import axios from "axios";
const JSON_SERVER_URL = `${process.env.JSON_SERVER_URL}/articles`;

// リクエストURL
// http://localhost:4010/api/articles
export default async function handler(req, res) {

  try {
    if(req.method === "GET") {
      const result = await axios.get(JSON_SERVER_URL).then(res => res.data);
      return res.status(200).json(result);
    }
  } catch {}

  return res.status(500).json({
    error: {
      status: 500,
      code: "BAD_REQUEST",
      message: "不正なリクエストです。"
    }
  })
}
