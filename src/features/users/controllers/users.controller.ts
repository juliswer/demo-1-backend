import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { UserRequestDto } from "@/features/users/dto/userRequest.dto";
import type { User } from "../entities/user.entity";
import { UsersService } from "../services/users.service";
import { PaginationDto } from "@/common/dto/pagination.dto";
import { LoginUserRequest } from "../dto/loginUserRequest.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async findAll(@Query() dto: PaginationDto) {
    return this.userService.findAll(dto);
  }

  @Post()
  async saveUser(@Body() dto: UserRequestDto): Promise<User> {
    return this.userService.saveUser(dto);
  }

  @Get("/:id")
  async findById(@Param("id") id: string): Promise<User | null> {
    return this.userService.findById(id);
  }

  @Get("/writers")
  async findWriters(): Promise<User[]> {
    return this.userService.findWriters();
  }

  @Get("/admins")
  async findAdmins(): Promise<User[]> {
    return this.userService.findAdmins();
  }

  @Post("/login")
  async loginUser(@Body() dto: LoginUserRequest): Promise<User | null> {
    return this.userService.loginUser(dto);
  }

  @Get("/email/:email")
  async findByEmail(@Param("email") email: string): Promise<User | null> {
    return this.userService.findByEmail(email);
  }

  @Patch("/:id")
  async updateUser(@Body() dto: UserRequestDto) {
    return this.userService.updateUser(dto);
  }
}
