import { Module } from "@nestjs/common";

import { PodcastIndexService } from "./podcast-index.service";

@Module({
  providers: [PodcastIndexService],
  exports: [PodcastIndexService],
})
export class PodcastIndexModule {}
