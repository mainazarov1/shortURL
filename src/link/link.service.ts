import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLinkDto, FindOneLinkDto, UpdateLinkDto } from './dto';
import { LinkEntity } from './entity';
// const randomString = require('randomstring');
import * as randomstring from 'randomstring';
import { FindLinkDto } from './dto/find-link.dto';

@Injectable()
export class LinkService {
  constructor(
    @InjectModel(LinkEntity.name)
    private readonly entity: Model<LinkEntity>,
  ) {}
  async findAll(user: string) {
    const users = await this.entity.find();
    return users.filter((el) => el.user === user);
  }
  async findOne(id: string) {
    const obj = await this.entity.findById(id);
    if (!obj) {
      throw new NotFoundException();
    }
    return obj;
  }
	async findLink(dto: FindLinkDto) {
		const { shortLink } = dto;
		const obj = await this.entity.findOne({ shortLink });
		return obj;
  	// const exist = await this.entity.findOne({ shortLink });
  	// if (!exist) {
  	// 	throw new ConflictException();
  	// };
  	// // const result = res.redirect({ link });
  	// return res.Redirect({ link })
  }
  async create(dto: CreateLinkDto) {
    const { link } = dto;
    const exist = await this.entity.findOne({ link });
    if (exist) {
      throw new ConflictException();
    }
		const shortLink = randomstring.generate(7);
		dto.shortLink = shortLink;
		const count = 0;
		dto.count = count;
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
