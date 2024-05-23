import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaRepositoryDigimons } from './repositories/prisma/prisma.digimons.repository.service';
import { PrismaService } from './database/prisma.service';
import { DigimonApiService } from './services/digimon.api.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [DigimonApiService, PrismaService, PrismaRepositoryDigimons],
})
export class AppModule {}
