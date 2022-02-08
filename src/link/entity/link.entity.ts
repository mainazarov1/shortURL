import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

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
    type: Date,
    required: true,
  })
  user: string;
}
export const LinkSchema = SchemaFactory.createForClass(LinkEntity);
