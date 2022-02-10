import { ApiProperty } from '@nestjs/swagger';
import { Length } from 'class-validator';

export class FindOneLinkDto {
  @ApiProperty({
    description: 'ID of link',
    example: 'asdadwd134fcrwef',
  })
  @Length(24, 24)
  id: string;
}
