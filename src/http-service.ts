import axios from 'axios';

class HttpService {
    private apiKey = '50099a9b2edb467af1f0916d5a89d35f';
    private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
    private apiForecastUrl = 'https://api.openweathermap.org/data/2.5/forecast';
    private lang = window.navigator.language.slice(0, 2);

    public getWeather(lat: any, lon: any) {
        const current = axios.get(
            `${this.apiUrl}?lat=${lat}&lon=${lon}&units=metric&lang=${this.lang}&appid=${this.apiKey}`
        );
        const forecast = axios.get(
            `${this.apiForecastUrl}?lat=${lat}&lon=${lon}&lang=${this.lang}&units=metric&appid=${this.apiKey}`
        );
        return Promise.all([ current, forecast ]);
    }
}

export const httpService = new HttpService();
