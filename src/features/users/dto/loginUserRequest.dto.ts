import { IsString } from "class-validator";

export class LoginUserRequest {
  @IsString()
  email: string;
}
