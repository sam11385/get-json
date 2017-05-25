export class WeatherModel {
  main: WeatherDetails;
  name: string;
  weather: WeatherInfo;
}

export class WeatherDetails {
  temp: number;
  weather: number;
  temp_min: number;
  temp_max: number;
}

export class WeatherInfo {
  description: string;
}