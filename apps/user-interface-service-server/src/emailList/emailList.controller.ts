import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmailListService } from "./emailList.service";
import { EmailListControllerBase } from "./base/emailList.controller.base";

@swagger.ApiTags("emailLists")
@common.Controller("emailLists")
export class EmailListController extends EmailListControllerBase {
  constructor(protected readonly service: EmailListService) {
    super(service);
  }
}
