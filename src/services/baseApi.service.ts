import Http from './http.service';

class BaseApiService {
  protected httpClient: Http;

  constructor() {
    this.httpClient = new Http();
  }
}

export default BaseApiService;
