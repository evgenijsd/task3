import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity('notes')
export class NoteBase {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ name: 'archive', type: 'bool' })
  archive: string

  @Column({ name: 'category', type: 'text' })
  category: string

  @Column({ name: 'content', type: 'text' })
  content: string

  @Column({ name: 'name_last', type: 'text' })
  nameLast: string

  @Column({ name: 'created', type: 'date' })
  created: Date

  @Column({ name: 'dates', type: 'text' })
  dates: string

  @Column({ name: 'name', type: 'text' })
  name: string

  @Column({ name: 'picture', type: 'text' })
  picture: string
}