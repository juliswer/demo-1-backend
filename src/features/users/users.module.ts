import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";

import { UsersController } from "./controllers/users.controller";

import { UsersRepository } from "./repositories/users.repository";

import { UsersService } from "./services/users.service";

@Module({
  imports: [HttpModule],
  controllers: [UsersController],
  providers: [UsersRepository, UsersService],
  exports: [UsersService, UsersRepository],
})
export class UsersModule {}
