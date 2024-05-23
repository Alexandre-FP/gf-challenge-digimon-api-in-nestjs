import { PrismaService } from 'src/database/prisma.service';
import { DigimonApiService } from './digimon.api.service';

async function digimonService() {
  const digimons = new DigimonApiService();
  const prisma = new PrismaService();

  const result = await digimons.fetchDigimons();

  await prisma.digimon
    .createMany({
      data: result,
      skipDuplicates: true,
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}

digimonService();
