import * as graphql from "@nestjs/graphql";
import { EmailListResolverBase } from "./base/emailList.resolver.base";
import { EmailList } from "./base/EmailList";
import { EmailListService } from "./emailList.service";

@graphql.Resolver(() => EmailList)
export class EmailListResolver extends EmailListResolverBase {
  constructor(protected readonly service: EmailListService) {
    super(service);
  }
}
