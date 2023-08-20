export default function handler(req, res) {
  const { body, query, cookies } = req
  console.log({ body, query, cookies })
  res.status(200).json({ text: 'Hello' })
}
