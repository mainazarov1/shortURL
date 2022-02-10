import { Module } from '@nestjs/common';
import { LinkService } from './link.service';
import { LinkController } from './link.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LinkEntity, LinkSchema } from './entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: LinkEntity.name, schema: LinkSchema }]),
  ],
  providers: [LinkService],
  controllers: [LinkController],
})
export class LinkModule {}
