import { PartialType } from '@nestjs/mapped-types';
import { CreateTypicodePostDto } from './create-typicode-post.dto';

export class UpdateTypicodePostDto extends PartialType(CreateTypicodePostDto) {}
