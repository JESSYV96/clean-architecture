import { Module } from '@nestjs/common';
import { MultiplayerQuizModule } from './multiplayer-quiz/multiplayer.module';

@Module({
  imports: [MultiplayerQuizModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
