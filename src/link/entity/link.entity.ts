import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ILink } from '../interface';

@Schema()
export class LinkEntity implements ILink {
  @Prop({
    type: String,
    required: true,
  })
  link: string;

  @Prop({
    type: String,
    required: false,
  })
  shortLink: string;

  @Prop({
    type: String,
    required: true,
  })
  user: string;

  @Prop({
    type: String,
    required: false,
  })
  title: string;
}
export const LinkSchema = SchemaFactory.createForClass(LinkEntity);
