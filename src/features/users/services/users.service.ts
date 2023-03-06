import { Injectable } from "@nestjs/common";
import type { UserRequestDto } from "../dto/userRequest.dto";
import { User } from "@/features/users/entities/user.entity";
import { UsersRepository } from "../repositories/users.repository";
import type { PaginationDto } from "@/common/dto/pagination.dto";
import type { LoginUserRequest } from "../dto/loginUserRequest.dto";
import { BusinessException } from "@/common/exceptions/exceptionTypes";
import { BusinessErrors } from "@/common/constants";

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async findAll(paginationDto: PaginationDto) {
    return this.usersRepository.findAll(paginationDto);
  }

  async findById(id: string): Promise<User | null> {
    return this.usersRepository.findById(id);
  }

  async findWriters(): Promise<User[]> {
    return this.usersRepository.findWriters();
  }

  async findAdmins(): Promise<User[]> {
    return this.usersRepository.findAdmins();
  }

  async loginUser(dto: LoginUserRequest): Promise<User | null> {
    const loggedUser = await this.usersRepository.findByEmail(dto.email);
    if (!loggedUser) throw new BusinessException(BusinessErrors.user_not_found);
    return loggedUser;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findByEmail(email);
  }

  async saveUser(dto: UserRequestDto): Promise<User> {
    const existentUser = await this.findByEmail(dto.email);
    if (!existentUser) return this.usersRepository.saveUser(dto);
    return existentUser;
  }

  async updateUser(dto: UserRequestDto): Promise<UserRequestDto> {
    return this.usersRepository.updateUser(dto);
  }
}
