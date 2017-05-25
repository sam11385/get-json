export class WeatherModel {
  main: WeatherDetails;
  name: string;
  weather: WeatherInfo;
  sys: Sys;
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

export class Sys {
  sunrise: number;
  sunset: number;
}