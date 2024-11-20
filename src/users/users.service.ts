import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}


  async resetProblemsFlag(): Promise<{ result: { count: number } }> {

    const result = await this.prisma.user.updateMany({
      where: { hasProblems: true },
      data: { hasProblems: false },
    });
    
    return { result };
  }
}
