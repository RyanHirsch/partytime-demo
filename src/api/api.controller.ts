import { Body, Controller, Get, Post, Query } from "@nestjs/common";

import { PodcastIndexService } from "../podcast-index/podcast-index.service";

import { PartytimeService } from "src/partytime/partytime.service";

@Controller("api")
export class ApiController {
  private startedAt = new Date();

  constructor(
    private readonly podcastIndex: PodcastIndexService,
    private readonly partytime: PartytimeService
  ) {}
  @Get("info")
  getInfo() {
    return {
      startedAt: this.startedAt,
    };
  }

  @Get("search")
  async searchPodcastIndex(@Query("q") query: string) {
    return await this.podcastIndex.search(query);
  }

  @Post("parse")
  async fetchAndParseFeed(@Body("feedUrl") feedUrl: string) {
    return await this.partytime.parseUrl(feedUrl);
  }
}
