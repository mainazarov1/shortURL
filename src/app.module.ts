import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LinkModule } from './link/link.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@shorturl.5qsvy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    LinkModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
