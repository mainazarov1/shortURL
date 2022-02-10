import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { LinkEntity } from './link/entity';
import { LinkModule } from './link/link.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@shorturl.5qsvy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    LinkModule,
    // LinkEntity,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
