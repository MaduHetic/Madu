import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CompanyDto } from './companyDto';
import { CompanyService } from './company.service';
import { Company } from './companyEntity';
import { RoleGuard } from '../guard/role.guard';
import { Roles } from '../decorator/role.decorator';
import { EntityTypeInterceptor } from '../interceptor/entity-type.interceptor';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';

/**
 * Controller to manage the companys data
 */
@ApiBearerAuth()
@ApiTags('company')
@Controller('company')
@UseGuards(AuthGuard('jwt'))
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  /**
   * method call method to check and add a new company
   * @param {CompanyDto} companyDto information to add a new company
   * @returns Data was added
   */
  @ApiCreatedResponse()
  @ApiUnauthorizedResponse()
  @ApiBody({ type: [CompanyDto] })
  @UseGuards(RoleGuard)
  @Roles('admin')
  @Post()
  @UsePipes(new ValidationPipe({transform: true}))
  async addCompany(@Body() companyDto: CompanyDto) {
    return await this.companyService.addCompany(companyDto);
  }

  /**
   * this method return one company entity with an id
   * @param id {number}
   * @returns {Company}
   */
  @ApiOkResponse()
  @ApiUnauthorizedResponse()
  @ApiNotFoundResponse()
  @UseGuards(RoleGuard)
  @Roles('admin')
  @Get('one/:id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async getOneCompany(@Param('id', new ParseIntPipe()) id: number): Promise<Company> {
    return await this.companyService.getOne(id);
  }

  /**
   * This method return all company in database
   * @returns {Company[]}
   */
  @Get()
  @UseInterceptors(EntityTypeInterceptor)
  @UseGuards(RoleGuard)
  @Roles('admin')
  async getAllCompany(): Promise<Company[]> {
    return await this.companyService.getAllCompany();
  }

  /**
   * This method update one company data
   * @param id
   * @param companyDto
   */
  @ApiOkResponse()
  @ApiUnauthorizedResponse()
  @ApiNotFoundResponse()
  @UseGuards(RoleGuard)
  @Roles('admin')
  @Put(':id')
  @UsePipes(new ValidationPipe({transform: true}))
  async updateCompany(@Param('id', new ParseIntPipe()) id: number, @Body() companyDto: CompanyDto) {
    return await this.companyService.addCompany(companyDto, id);
  }

  /**
   * This method call method to delete a company from the database
   * @param idCompany {number}
   * @returns string
   */
  @ApiOkResponse()
  @ApiUnauthorizedResponse()
  @ApiNotFoundResponse()
  @UseGuards(RoleGuard)
  @Roles('admin')
  @Delete(':id')
  @UsePipes(new ValidationPipe({  transform: true }))
  async deleteCompany(@Param('id', new ParseIntPipe()) idCompany: number): Promise<string> {
    await this.companyService.getOne(idCompany);
    await this.companyService.deleteCompany(idCompany);
    return 'delete success';
  }

  /**
   *
   */
  @ApiOkResponse()
  @ApiUnauthorizedResponse()
  @UseGuards(RoleGuard)
  @Roles('admin')
  @Get('order/date')
  async getCompanyOrderByDate(): Promise<Company[]> {
    return await this.companyService.orderByDate();
  }
}
