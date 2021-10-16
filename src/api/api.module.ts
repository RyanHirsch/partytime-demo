import { Module } from "@nestjs/common";

import { PartytimeModule } from "../partytime/partytime.module";
import { PodcastIndexModule } from "../podcast-index/podcast-index.module";

import { ApiController } from "./api.controller";

@Module({ controllers: [ApiController], imports: [PartytimeModule, PodcastIndexModule] })
export class ApiModule {}
