import { PaginationDto } from "@/common/dto/pagination.dto";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository, SelectQueryBuilder } from "typeorm";
import { NoteRequestDto } from "../dto/noteRequest.dto";
import { Note } from "../entities/note.entity";
import { User } from "../../users/entities/user.entity";

@Injectable()
export class NotesRepository extends Repository<Note> {
  constructor(private readonly dataSource: DataSource) {
    super(Note, dataSource.createEntityManager());
  }

  getItemQueryBuilder(): SelectQueryBuilder<Note> {
    return this.createQueryBuilder("notes")
      .select([
        "notes.id",
        "notes.title",
        "notes.description",
        "notes.createdAt",
        "notes.updatedAt",

        "author.id",
        "author.firstName",
        "author.lastName",
        "author.email",
        "author.image",
      ])
      .leftJoin("notes.author", "author");
  }

  async findAll({ limit, skip }: PaginationDto) {
    const query = this.getItemQueryBuilder().take(limit).skip(skip);

    const notes = await query.getMany();
    const count = await query.getCount();

    return {
      count,
      notes,
    };
  }

  async findById(id: string): Promise<Note | null> {
    return this.getItemQueryBuilder().where("notes.id = :id", { id }).getOne();
  }

  async saveNote(noteRequestDto: NoteRequestDto): Promise<Note> {
    const note = this.create({
      title: noteRequestDto.title,
      description: noteRequestDto.description,
      author: new User(noteRequestDto.author.id),
    });
    return this.save(note);
  }

  async updateNote(noteRequestDto: NoteRequestDto): Promise<NoteRequestDto> {
    await this.update({ id: noteRequestDto.id }, noteRequestDto);
    return noteRequestDto;
  }

  async deleteNote(id: string): Promise<Note | null> {
    const note = await this.getItemQueryBuilder()
      .where("notes.id = :id", { id })
      .getOne();
    await this.delete({ id });
    return note;
  }
}
