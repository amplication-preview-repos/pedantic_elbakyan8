/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { EmailListService } from "../emailList.service";
import { EmailListCreateInput } from "./EmailListCreateInput";
import { EmailList } from "./EmailList";
import { EmailListFindManyArgs } from "./EmailListFindManyArgs";
import { EmailListWhereUniqueInput } from "./EmailListWhereUniqueInput";
import { EmailListUpdateInput } from "./EmailListUpdateInput";

export class EmailListControllerBase {
  constructor(protected readonly service: EmailListService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EmailList })
  async createEmailList(
    @common.Body() data: EmailListCreateInput
  ): Promise<EmailList> {
    return await this.service.createEmailList({
      data: data,
      select: {
        category: true,
        categoryLookup: true,
        createdAt: true,
        email: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [EmailList] })
  @ApiNestedQuery(EmailListFindManyArgs)
  async emailLists(@common.Req() request: Request): Promise<EmailList[]> {
    const args = plainToClass(EmailListFindManyArgs, request.query);
    return this.service.emailLists({
      ...args,
      select: {
        category: true,
        categoryLookup: true,
        createdAt: true,
        email: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: EmailList })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async emailList(
    @common.Param() params: EmailListWhereUniqueInput
  ): Promise<EmailList | null> {
    const result = await this.service.emailList({
      where: params,
      select: {
        category: true,
        categoryLookup: true,
        createdAt: true,
        email: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: EmailList })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateEmailList(
    @common.Param() params: EmailListWhereUniqueInput,
    @common.Body() data: EmailListUpdateInput
  ): Promise<EmailList | null> {
    try {
      return await this.service.updateEmailList({
        where: params,
        data: data,
        select: {
          category: true,
          categoryLookup: true,
          createdAt: true,
          email: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: EmailList })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteEmailList(
    @common.Param() params: EmailListWhereUniqueInput
  ): Promise<EmailList | null> {
    try {
      return await this.service.deleteEmailList({
        where: params,
        select: {
          category: true,
          categoryLookup: true,
          createdAt: true,
          email: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
