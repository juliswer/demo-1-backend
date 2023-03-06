import { PaginationDto } from "@/common/dto/pagination.dto";
import { Injectable } from "@nestjs/common";
import { Note } from "../entities/note.entity";
import { NoteRequestDto } from "@/features/notes/dto/noteRequest.dto";
import { NotesRepository } from "../repositories/notes.repository";

@Injectable()
export class NotesService {
  constructor(private readonly notesRepository: NotesRepository) {}

  async findAll(paginationDto: PaginationDto) {
    return this.notesRepository.findAll(paginationDto);
  }

  async findById(id: string): Promise<Note | null> {
    return this.notesRepository.findById(id);
  }

  async saveNote(noteRequestDto: NoteRequestDto): Promise<Note> {
    return this.notesRepository.saveNote(noteRequestDto);
  }

  async updateNote(noteRequestDto: NoteRequestDto): Promise<NoteRequestDto> {
    return this.notesRepository.updateNote(noteRequestDto);
  }

  async deleteNote(id: string): Promise<Note | null> {
    return this.notesRepository.deleteNote(id);
  }
}
