import { Module } from '@nestjs/common';
import { UrlShortnerController } from './url_shortner.controller';
import { UrlShortnerService } from './url_shortner.service';

@Module({
  imports: [],
  controllers: [UrlShortnerController],
  providers: [UrlShortnerService],
})
export class UrlShortnerModule {}
