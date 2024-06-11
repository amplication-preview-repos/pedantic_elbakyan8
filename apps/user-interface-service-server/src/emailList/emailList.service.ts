import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmailListServiceBase } from "./base/emailList.service.base";

@Injectable()
export class EmailListService extends EmailListServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
