// import {
//   ApiHideProperty,
//   ApiProperty
// } from '@nestjs/swagger';
// import { IsNotEmpty, Length } from 'class-validator';

export class FindLinkDto {
  // @ApiHideProperty()
  shortLink: string;

  // @ApiProperty({
  //   description: 'User email',
  //   example: 'example@gmail.com',
  // })
  // @IsNotEmpty()
  // @Length(5, 30)
	user: string;
	count: number;
}
