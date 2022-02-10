import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLinkDto, UpdateLinkDto } from './dto';
import { LinkEntity } from './entity';
const randomString = require('randomstring');
randomString.generate(7);

@Injectable()
export class LinkService {
  constructor(
    @InjectModel(LinkEntity.name)
    private readonly entity: Model<LinkEntity>,
  ) {}
  async findAll() {
    return await this.entity.find();
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
    let shortLink = randomString.generate(7);
		let { shortLink } = dto
    console.log(shortLink);
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
