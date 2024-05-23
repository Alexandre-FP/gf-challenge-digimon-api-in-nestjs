import {
  Controller,
  Get,
  Param,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { PrismaRepositoryDigimons } from './repositories/prisma/prisma.digimons.repository.service';

@Controller('digimons')
export class AppController {
  constructor(private digimonsRepository: PrismaRepositoryDigimons) {}

  @Get()
  async searchAllDigimons() {
    const digimons = await this.digimonsRepository.allDigimon();

    return digimons;
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const digimons = await this.digimonsRepository.findById(id);

    if (!digimons) {
      throw new HttpException('Digimon not found', HttpStatus.NOT_FOUND);
    }

    return digimons;
  }

  @Get('name/:name')
  async findByName(@Param('name') name: string) {
    const digimons = await this.digimonsRepository.findByName(name);

    if (!digimons) {
      throw new HttpException(`Digimon doesn't exist`, HttpStatus.NOT_FOUND);
    }

    return digimons;
  }

  @Get('level/:level')
  async findByLevel(@Param('level') level: string) {
    const digimons = await this.digimonsRepository.findBylevel(level);

    if (!digimons || digimons.length === 0) {
      throw new HttpException(
        'Level of this digmon does not exist',
        HttpStatus.NOT_FOUND,
      );
    }

    return digimons;
  }
}
