import { Module } from "@nestjs/common";

import { PartytimeService } from "./partytime.service";

@Module({ providers: [PartytimeService], exports: [PartytimeService] })
export class PartytimeModule {}
