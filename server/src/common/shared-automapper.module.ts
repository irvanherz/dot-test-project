import { classes } from '@automapper/classes';
import { AutomapperModule } from '@automapper/nestjs';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    AutomapperModule.forRoot([
      {
        name: 'classes',
        strategyInitializer: classes(),
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class SharedAutomapperModule {}
