'use client';
import HttpService from '@/common/services/http.service';
import { Example } from './example.types';

class ExampleApiService extends HttpService {
  constructor() {
    super({
      baseURL: 'https://64c3cfbd67cfdca3b66051f9.mockapi.io/',
    });
  }
  getExamples(): Promise<Example[]> {
    console.log('run example');
    return this.get('/product');
  }
  getExample(id: number) {
    return this.get<Example>(`/product/${id}`);
  }
  updateExample(example: Example) {
    return this.put<Example>(`/product/${example.id}`, example);
  }
}

const exampleApi = new ExampleApiService();

export default exampleApi;
