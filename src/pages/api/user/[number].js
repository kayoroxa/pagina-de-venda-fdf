const axios = require('axios')

export default async function handler(req, res) {
  const {
    query: { number },
    method,
  } = req

  switch (method) {
    // case 'GET' /* Get a model by its ID */:
    //   // try {
    //   //   const users = await axios.get(
    //   //     `https://api.jsonstorage.net/v1/json/05e182a5-66dd-4dfb-b45f-8fd701ea413d/1ed36400-4397-4f37-831b-65ef1cffa821`
    //   //   )
    //   //   if (!users) {
    //   //     return res.status(400).json({ success: false })
    //   //   }
    //   res.status(200).json({ success: true, number })
    //   // } catch (error) {
    //   //   res.status(400).json({ success: false })
    //   // }

    //   break

    case 'PUT' /* Edit a model by its ID */:
      try {
        const users = await axios
          .get(
            `https://api.jsonstorage.net/v1/json/05e182a5-66dd-4dfb-b45f-8fd701ea413d/1ed36400-4397-4f37-831b-65ef1cffa821`
          )
          .then(res => res.data)

        if (!users) {
          return res
            .status(400)
            .json({ success: false, data: "Don't have data" })
        } else if (!Array.isArray(users)) {
          return res
            .status(400)
            .json({ success: false, data: 'Is not Array', users })
        }

        const user = await axios.put(
          `https://api.jsonstorage.net/v1/json/05e182a5-66dd-4dfb-b45f-8fd701ea413d/1ed36400-4397-4f37-831b-65ef1cffa821?apiKey=${process.env.jsonstorage_key}`,
          [...users, number]
        )

        if (!user) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true })
      } catch (error) {
        res.status(400).json({ success: false, error: error.message })
      }
      break
  }
}
