import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards, Request, UsePipes, ValidationPipe, Put } from '@nestjs/common';
import { ChallengeService } from './challenge.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ChallengeDto } from './challengeDto';
import { RoleGuard } from '../guard/role.guard';
import { Roles } from '../decorator/role.decorator';
import { JoinUserChallengeService } from '../join-user-challenge/join-user-challenge.service';
import { Challenge } from './challengeEntity';
import { JoinUserChallengeDto } from '../join-user-challenge/joinUserChallengeDto';

@ApiTags('Challenge')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('challenge')
export class ChallengeController {
  constructor(
    private readonly challengeService: ChallengeService,
    private readonly joinUserChallengeService: JoinUserChallengeService,
  ) {}

  @UseGuards(RoleGuard)
  @Roles('admin')
  @UsePipes(ValidationPipe)
  @Post()
  async addChallenge(@Body() challengeDto: ChallengeDto) {
    return await this.challengeService.addChallenge(challengeDto);
  }

  @UseGuards(RoleGuard)
  @Roles('admin')
  @Get()
  async getChallenges() {
    return await this.challengeService.getChallenge();
  }

  @UseGuards(RoleGuard)
  @Roles('user')
  @Get('current')
  async getCurrentChallenge(@Request() user) {
    return await this.challengeService.getCurrentChallenge(user.user);
  }

  @UsePipes(ValidationPipe)
  @Delete(':id')
  async deleteChallenge(@Param('id', new ParseIntPipe()) idChallenge: number) {
    return await this.challengeService.deleteChallenge(idChallenge);
  }

  @UseGuards(RoleGuard)
  @Roles('user')
  @Put('validate/:id')
  async validateChallenge(@Param('id', new ParseIntPipe()) idChallenge: number, @Request() req) {
    const user = req.user.user;
    const challengeEntity = await this.challengeService.findOne(idChallenge);
    const doChallenge = true;
    return await this.joinUserChallengeService.addJoinUserChallenge(challengeEntity, user, doChallenge);
  }
}
