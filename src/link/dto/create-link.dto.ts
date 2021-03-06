import {
  ApiHideProperty,
  ApiProperty,
  ApiPropertyOptional,
} from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, Length } from 'class-validator';

export class CreateLinkDto {
  @ApiPropertyOptional({
    description: 'Title of link',
    example: 'Link to image',
  })
  @IsOptional()
  @Length(1, 30)
  title?: string;

  @ApiProperty({
    description: 'Link',
    example:
      'https://www.google.com/search?q=gandon&sxsrf=APq-WBuyxIRmhHRgfJPeXMFEwNEMcJyMFw%3A1644331735084&source=hp&ei=14ICYq7aAtL5qwHYmozYAQ&iflsig=AHkkrS4AAAAAYgKQ53JTa24BKHPNypiUL9PKM7UUq94f&gs_ssp=eJzj4tZP1zc0MqgwN00rNmD0YktPzEvJzwMAPm0GIw&oq=gandon&gs_lcp=Cgdnd3Mtd2l6EAMYADIFCC4QgAQyBQgAEMsBMgsILhDHARCvARDLATIFCAAQywEyCwguEMcBEK8BEMsBMgUIABDLATILCC4QxwEQrwEQywEyBQgAEMsBMgUILhDLATIFCAAQgAQ6BwgjEOoCECc6BAgjECc6BggjECcQEzoLCAAQgAQQsQMQgwE6EQguEIAEELEDEIMBEMcBENEDOggIABCABBCxAzoRCC4QgAQQsQMQgwEQxwEQrwE6CAguEIAEELEDOggILhCxAxCDAToHCAAQChDLAToLCC4QxwEQ0QMQywFQ_ChYuUtg11RoDXAAeACAAa0CiAHbB5IBBzAuNS4wLjGYAQCgAQGwAQo&sclient=gws-wiz',
  })
  @IsNotEmpty()
  @Length(0, 200)
  link: string;

  @ApiHideProperty()
  shortLink?: string;

  @ApiProperty({
    description: 'User email',
    example: 'example@gmail.com',
  })
  @IsNotEmpty()
  @Length(5, 30)
	user: string;
	
	// @ApiPropertyOptional({
  //   description: 'Title of link',
  //   example: 'Link to image',
  // })
	@IsNumber()
	@IsOptional()
  count?: number;
}
