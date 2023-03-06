import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { NotesController } from "./controllers/notes.controller";
import { NotesRepository } from "./repositories/notes.repository";
import { NotesService } from "./services/notes.service";

@Module({
  imports: [HttpModule],
  controllers: [NotesController],
  providers: [NotesRepository, NotesService],
  exports: [NotesService, NotesRepository],
})
export class NotesModule {}
