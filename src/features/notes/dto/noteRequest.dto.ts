import { User } from "@/features/users/entities/user.entity";
import { IsOptional, IsString } from "class-validator";

export class NoteRequestDto {
  @IsOptional()
  id: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  author: User;
}
