import { Module } from '@nestjs/common';
import { CalculatorModule } from './calculator/calculator.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { AddressesModule } from './addresses/addresses.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [CalculatorModule, UsersModule, PrismaModule, AddressesModule, MailModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
