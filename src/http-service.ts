import axios from 'axios';

class HttpService {
    private apiKey = '50099a9b2edb467af1f0916d5a89d35f';
    private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

    public async getWeather(lat: any, lon: any) {
        return axios.get(`${this.apiUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}`);
    }
}

export const httpService = new HttpService();
