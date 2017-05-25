export class WeatherModel {
  main: WeatherDetails;
}
// These details are straight from the JSON - picking out which ones we want to display
export class WeatherDetails {
  temp: number;
  weather: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}