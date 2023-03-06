import { PaginationDto } from "@/common/dto/pagination.dto";
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { NoteRequestDto } from "../dto/noteRequest.dto";
import { Note } from "../entities/note.entity";
import { NotesService } from "../services/notes.service";

@Controller("notes")
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  async paginate(@Query() paginationDto: PaginationDto) {
    return this.notesService.findAll(paginationDto);
  }

  @Get("/:id")
  async findById(@Param("id") id: string): Promise<Note | null> {
    return this.notesService.findById(id);
  }

  @Post()
  async saveNote(@Body() noteRequestDto: NoteRequestDto): Promise<Note> {
    return this.notesService.saveNote(noteRequestDto);
  }

  @Patch("/:id")
  async updateNote(
    @Body() noteRequestDto: NoteRequestDto
  ): Promise<NoteRequestDto> {
    return this.notesService.updateNote(noteRequestDto);
  }

  @Delete("/:id")
  async deleteNote(@Param("id") id: string) {
    return this.notesService.deleteNote(id);
  }
}
