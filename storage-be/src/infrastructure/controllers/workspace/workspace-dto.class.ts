import { Prisma, Workspace } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { PaginationDto } from 'src/infrastructure/common/dto/pagination.dto';

export class WorkspaceCreateDto
  implements Pick<Workspace, 'workspaceName' | 'description'>
{
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  workspaceName: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  description: string;
}

export class WorkspaceUpdateDto extends WorkspaceCreateDto {}

export class WorkspaceQueryDto extends PaginationDto {
  @ApiProperty({
    required: false,
    default: Prisma.SortOrder.desc,
    type: Prisma.SortOrder,
    enum: Prisma.SortOrder,
  })
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  sort: Prisma.SortOrder;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  workspaceName: string;
}
