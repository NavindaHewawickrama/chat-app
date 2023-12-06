const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

    try{
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {username: username, secret: username, first_name: username},
            {headers: {"private-Key": "7dad40e3-81e4-4094-809f-736714eb1b9b"}},
        )
        return res.status(r.status).json(r.data)
    }catch(e){
        return res.status(e.respnse.status).json(e.response.data)
    }

  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);