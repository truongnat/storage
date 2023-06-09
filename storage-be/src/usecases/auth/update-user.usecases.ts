import { ILogger } from 'src/domain/logger/logger.interface';
import { UserRepository } from 'src/domain/repositories/userRepository.interface';
import { AuthUpdateUserDto } from 'src/infrastructure/controllers/auth/auth-dto.class';
import { OtpService } from 'src/infrastructure/services/otp/otp.service';
import { NestMailerService } from 'src/infrastructure/config/NestMailer/nest-mailer.service';
import { ExceptionsService } from 'src/infrastructure/exceptions/exceptions.service';
import { HttpStatus } from '@nestjs/common';
import { ERROR_MESSAGE } from 'src/domain/constants/message';
import { User } from '@prisma/client';
import * as _ from 'lodash';

export class UpdateUserUsecases {
  constructor(
    private readonly logger: ILogger,
    private readonly userRepository: UserRepository,
    private readonly exceptionsService: ExceptionsService,
    private readonly otpService: OtpService,
    private readonly nestMailerService: NestMailerService,
  ) {}

  async updateProfile(id: string, authUpdateUserDto: AuthUpdateUserDto) {
    const user = await this.userRepository.getUserByIdentity({ id });
    const dataUpdated = {
      displayName: authUpdateUserDto.displayName || user.displayName,
      updatedAt: new Date(),
    } as User;
    if (authUpdateUserDto.email) {
      const checkUser = await this.userRepository.getUserByIdentity({
        email: authUpdateUserDto.email,
      });
      if (checkUser && checkUser.id !== id) {
        this.exceptionsService.badRequestException({
          message: ERROR_MESSAGE.EMAIL_ALREADY_EXIST,
          code_error: HttpStatus.BAD_REQUEST,
        });
      }
      dataUpdated.email = authUpdateUserDto.email;
    }
    const userUpdated = await this.userRepository.updateUser(
      { id },
      dataUpdated,
    );

    return _.omit(userUpdated, [
      'password',
      'hashRefreshToken',
      'setting.id',
      'setting.userId',
    ]);
  }
}
