export interface TicketDto {
    ticketNumber: string,
    firstName: string,
    lastName: string,
    birthDate: string,
    avatar: string,
    score: number,
    completedStations?: {[key: string]: number},
    completedCount: number,
    createdAt: string;
    planetProgress: {formName: string, total: number, scores: string, completed?:boolean}[]
}