import { Role } from "@/common/enums/role.enum";
import { IsEnum, IsOptional, IsString } from "class-validator";

export class UserRequestDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsOptional()
  @IsEnum(Role)
  role: Role;

  @IsString()
  email: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  image: string;
}
