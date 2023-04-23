import { FileRepository } from 'src/domain/repositories/fileRepository.interface';
import { FolderRepository } from 'src/domain/repositories/folderRepository.interface';
import { FileCreateDto } from 'src/infrastructure/controllers/file/file-dto.class';
import { ExceptionsService } from 'src/infrastructure/exceptions/exceptions.service';
import { ERROR_MESSAGE } from 'src/domain/constants/message';
import { File } from '@prisma/client';
import { NameUtils } from 'src/infrastructure/common/utils/name.utils';

export class CreateFileUsecases {
  constructor(
    private readonly folderRepo: FolderRepository,
    private readonly fileRepo: FileRepository,
    private readonly exceptionsService: ExceptionsService,
  ) {}

  private async validateCreateFileWithProject(id: string) {
    const folder = await this.folderRepo.getFolderById(id);
    if (!folder) {
      this.exceptionsService.badRequestException({
        message: ERROR_MESSAGE.FOLDER_NOT_EXIST,
      });
    }
    return folder;
  }

  async createFile(fileCreateDto: FileCreateDto) {
    const project = await this.validateCreateFileWithProject(
      fileCreateDto.folderId,
    );

    try {
      const fileInput = {
        fileName: fileCreateDto.fileName,
        access: fileCreateDto.access,
        ext: NameUtils.getExtFile(fileCreateDto.fileName),
        size: fileCreateDto.size,
        path: NameUtils.namesToPath(project.path, fileCreateDto.fileName),
        description: fileCreateDto.description,
      } as File;
      return await this.fileRepo.createFile(fileInput);
    } catch {
      this.exceptionsService.internalServerErrorException({
        message: ERROR_MESSAGE.SERVER_ERR,
      });
    }
  }
}
