// api/subway.js

export default async function handler(req, res) {
  const { station } = req.query;
  const API_KEY = '5a4968704b676f6f3536614f796d51';
  const stationEncoded = encodeURIComponent(station);
  const url = `http://swopenapi.seoul.go.kr/api/subway/${API_KEY}/json/realtimeStationArrival/0/5/${stationEncoded}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      error: '서울시 API 호출 중 오류 발생',
      detail: err.message
    });
  }
}
