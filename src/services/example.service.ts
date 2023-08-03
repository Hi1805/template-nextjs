import BaseApiService from './baseApi.service';

class ExampleApiService extends BaseApiService {
  sayHello() {
    return this.httpClient.get('/api/');
  }
}

const exampleApi = new ExampleApiService();

export default exampleApi;
