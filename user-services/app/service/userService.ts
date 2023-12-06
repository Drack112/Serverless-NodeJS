import { LoginInput } from "../models/dto/LoginInput";
import { SignInput } from "../models/dto/SignInput";
import { UserRepository } from "../repository/userRepository";
import { AppValidationError } from "../utils/error";
import {
  GenerateAccessCode,
  SendVerificationCode,
} from "../utils/notification";
import {
  GetHashedPassword,
  GetSalt,
  GetToken,
  ValidatePassword,
  VerifyToken,
} from "../utils/password";
import { ErrorResponse, SuccessResponse } from "../utils/response";
import { APIGatewayProxyEventV2 } from "aws-lambda";
import { plainToClass } from "class-transformer";
import { autoInjectable } from "tsyringe";

@autoInjectable()
export class UserService {
  repository: UserRepository;
  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  // User Creation, Validation & Login
  async CreateUser(event: APIGatewayProxyEventV2) {
    try {
      const input = plainToClass(SignInput, event.body);
      const error = await AppValidationError(input);
      if (error) return ErrorResponse(404, error);

      const salt = await GetSalt();
      const hashedPassword = await GetHashedPassword(input.password, salt);
      const data = await this.repository.createAccount({
        email: input.email,
        password: hashedPassword,
        phone: input.phone,
        userType: "BUYER",
        salt: salt,
      });

      return SuccessResponse(data);
    } catch (error) {
      console.log(error);
      return ErrorResponse(500, error);
    }
  }

  async UserLogin(event: APIGatewayProxyEventV2) {
    try {
      const input = plainToClass(LoginInput, event.body);
      const error = await AppValidationError(input);
      if (error) return ErrorResponse(404, error);
      const data = await this.repository.findAccount(input.email);
      const verified = await ValidatePassword(
        input.password,
        data.password,
        data.salt
      );
      if (!verified) {
        throw new Error("password does not match!");
      }
      const token = GetToken(data);

      return SuccessResponse({ token });
    } catch (error) {
      console.log(error);
      return ErrorResponse(500, error);
    }
  }

  async GetVerificationToken(event: APIGatewayProxyEventV2) {
    const token = event.headers.authorization;
    const payload = await VerifyToken(token);
    if (payload) {
      const { code, expiry } = GenerateAccessCode();
      const response = await SendVerificationCode(code, payload.phone);
      return SuccessResponse({
        message: "verification code is sent to your registered mobile number!",
      });
    }
  }

  async VerifyUser(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "response from Verify User" });
  }

  // User profile
  async CreateProfile(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "response from Create User Profile" });
  }

  async GetProfile(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "response from Get User Profile" });
  }
  async EditProfile(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "response from Edit User Profile" });
  }

  // Cart Section
  async CreateCart(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "response from Create Cart" });
  }

  async GetCart(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "response from Get Cart" });
  }

  async UpdateCart(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "response from Update Cart" });
  }

  // Payment Section
  async CreatePaymentMethod(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "response from Create Payment Method" });
  }

  async GetPaymentMethod(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "response from Get Payment Method" });
  }

  async UpdatePaymentMethod(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "response from Update Payment Method" });
  }
}
