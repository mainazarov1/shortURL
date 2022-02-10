import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, Length } from 'class-validator';

export class UpdateLinkDto {
  @ApiPropertyOptional()
  id?: string;

  @ApiProperty({
    description: 'Title of link',
    example: 'Link to image',
  })
  @IsNotEmpty()
  @Length(1, 30)
  title: string;

  @ApiProperty({
    description: 'Link',
    example:
      'https://www.google.com/search?q=gandon&sxsrf=APq-WBuyxIRmhHRgfJPeXMFEwNEMcJyMFw%3A1644331735084&source=hp&ei=14ICYq7aAtL5qwHYmozYAQ&iflsig=AHkkrS4AAAAAYgKQ53JTa24BKHPNypiUL9PKM7UUq94f&gs_ssp=eJzj4tZP1zc0MqgwN00rNmD0YktPzEvJzwMAPm0GIw&oq=gandon&gs_lcp=Cgdnd3Mtd2l6EAMYADIFCC4QgAQyBQgAEMsBMgsILhDHARCvARDLATIFCAAQywEyCwguEMcBEK8BEMsBMgUIABDLATILCC4QxwEQrwEQywEyBQgAEMsBMgUILhDLATIFCAAQgAQ6BwgjEOoCECc6BAgjECc6BggjECcQEzoLCAAQgAQQsQMQgwE6EQguEIAEELEDEIMBEMcBENEDOggIABCABBCxAzoRCC4QgAQQsQMQgwEQxwEQrwE6CAguEIAEELEDOggILhCxAxCDAToHCAAQChDLAToLCC4QxwEQ0QMQywFQ_ChYuUtg11RoDXAAeACAAa0CiAHbB5IBBzAuNS4wLjGYAQCgAQGwAQo&sclient=gws-wiz',
  })
  @IsNotEmpty()
  @Length(0, 100)
  link: string;

  @ApiProperty({
    description: 'Short link',
    example: 'https://www.google.com/search?q=gandon&sxsrf',
  })
  @IsOptional()
  @Length(0, 50)
  shortLink: string;

  @ApiProperty({
    description: 'User email',
    example: 'example@gmail.com',
  })
  @IsNotEmpty()
  @Length(10, 30)
  user: string;
}