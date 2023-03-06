import { UsersModule } from "@/features/users/users.module";
import { MiddlewareConsumer, NestModule } from "@nestjs/common";
import { Module, RequestMethod } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PagerMiddleware } from "./common/middlewares/pager.middleware";
import { dbProvider } from "./common/providers/db.provider";
import { appConfig } from "./common/config/app.config";
import { NotesModule } from "./features/notes/notes.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
    }),
    TypeOrmModule.forRootAsync({ ...dbProvider }),
    NotesModule,
    UsersModule,
  ],
  controllers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(PagerMiddleware)
      .forRoutes({ path: "*", method: RequestMethod.GET });
  }
}
