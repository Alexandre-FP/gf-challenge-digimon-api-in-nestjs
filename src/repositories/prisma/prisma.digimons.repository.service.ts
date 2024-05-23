import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class PrismaRepositoryDigimons {
  constructor(private prisma: PrismaService) {}
  async findById(id: string) {
    const digimon = await this.prisma.digimon.findUnique({
      where: {
        id,
      },
    });

    return digimon;
  }

  async allDigimon() {
    const digimon = await this.prisma.digimon.findMany({});

    return digimon;
  }

  async findByName(name: string) {
    const digimon = await this.prisma.digimon.findFirst({
      where: {
        name,
      },
    });

    return digimon;
  }

  async findBylevel(level: string) {
    const digimon = await this.prisma.digimon.findMany({
      where: {
        level,
      },
    });

    return digimon; 
  }
}
