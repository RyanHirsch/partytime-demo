import { Injectable } from "@nestjs/common";
import _fetch from "isomorphic-fetch";
import partytime from "podcast-partytime";

@Injectable()
export class PartytimeService {
  async parseUrl(url: string) {
    try {
      const xml = await _fetch(url).then((resp) => resp.text());
      return partytime.parseFeed(xml);
    } catch (err) {}
  }
}
