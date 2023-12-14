import { Length } from "class-validator";
import { LoginInput } from "./LoginInput";

export class SignInput extends LoginInput {
  @Length(12, 14)
  phone: string;
}
