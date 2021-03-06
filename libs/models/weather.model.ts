export interface WeatherModel {
  base: string,
  clouds: {
    all: string
  },
  cod: number,
  coord: {lon: number, lat: number}
  dt: number
  id: number
  main: {temp: number, feels_like: number, temp_min: number, temp_max: number, pressure: number}
  name: string,
  sys: {type: number, id: number, country: string, sunrise: number, sunset: number}
  timezone: number
  visibility: number
  weather: {
    description: string,
    icon: string,
    id: number,
    main: string
  }[],
  wind: {speed: number, deg: number, gust: number}
}


