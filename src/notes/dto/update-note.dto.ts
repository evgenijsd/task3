export class UpdateNoteDto {
    readonly archive: boolean
    readonly category: string
    readonly content: string
    readonly created: Date
    readonly dates: string
    readonly name: string
    readonly picture: string
}