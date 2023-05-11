export default async function handle(req, res) {
  const url = decodeURIComponent(req.url).replace('/api/openweathermap?url=', '')
  const response = await fetch(`https://api.openweathermap.org/${url}&appid=${process.env.OM_KEY}`)
  const json = await response.json('')
  res.status(response.status).json(json)
}