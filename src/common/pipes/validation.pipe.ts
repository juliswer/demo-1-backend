import type { PipeTransform, ArgumentMetadata } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";
import { ValidationException } from "../exceptions/exceptionTypes/validation.exception";

@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    const object = plainToClass(metatype, value);
    const errors = await validate(object, {
      validationError: { target: false },
    });

    if (errors.length > 0) throw new ValidationException(errors);

    return value;
  }

  private toValidate(metatype: any): boolean {
    const types: any[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
