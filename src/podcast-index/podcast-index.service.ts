import { Injectable } from "@nestjs/common";
import PodcastIndexClient from "podcastdx-client";
import { config } from "dotenv";

config();

@Injectable()
export class PodcastIndexService {
  private client = new PodcastIndexClient({
    key: process.env.API_KEY,
    secret: process.env.API_SECRET,
  });
  search(query: string) {
    return this.client.search(query);
  }
}
