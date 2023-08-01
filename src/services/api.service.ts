import axiosConfig from '@/configs/api.config';
import Http from './http.service';

class ApiBaseService {
  protected httpClient: Http;

  constructor() {
    this.httpClient = new Http(axiosConfig);
  }
}

const apiService = new ApiBaseService();

export default apiService;
