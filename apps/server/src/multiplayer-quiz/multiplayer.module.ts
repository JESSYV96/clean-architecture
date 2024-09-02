import { Module } from '@nestjs/common';
import { MultiplayerQuizGateway } from './multiplayer.gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [MultiplayerQuizGateway],
})
export class MultiplayerQuizModule {}
