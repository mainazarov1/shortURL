import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLinkDto, UpdateLinkDto } from './dto';
import { LinkEntity } from './entity';
// const randomString = require('randomstring');
import * as randomstring from 'randomstring';

@Injectable()
export class LinkService {
  constructor(
    @InjectModel(LinkEntity.name)
    private readonly entity: Model<LinkEntity>,
  ) {}
	async findAll(user: string) {
		// function filter(user:string) {
			
		// }
		let users = await this.entity.find();
		return users.filter(el=>el.user === user)
  }
  async findOne(id: string) {
    const link = await this.entity.findById(id);
    if (!link) {
      throw new NotFoundException();
    }
    return link;
  }
  async create(dto: CreateLinkDto) {
    const { link } = dto;
    const exist = await this.entity.findOne({ link });
    if (exist) {
      throw new ConflictException();
    }
    let shortLink = randomstring.generate(7);
		dto.shortLink = shortLink;
    return await this.entity.create(dto);
  }
  async update(id: string, dto: UpdateLinkDto) {
    const link = await this.findOne(id);
    Object.assign(link, dto);
    return await link.save();
  }
  async delete(id: string) {
    // const link = await this.findOne(id);
    // return this.entity.findByIdAndDelete({ link });
    await this.findOne(id);
    await this.entity.findByIdAndDelete(id);
  }
}
