import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class DigimonApiService {
  async fetchDigimons() {
    const response = await axios.get(
      'https://digimon-api.vercel.app/api/digimon',
    );
    return response.data;
  }
}
