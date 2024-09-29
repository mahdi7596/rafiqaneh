export interface StationAnswer {
    station: 'job'| 'adrenaline'|'family'|'poletical'|'letter';
    question: number;
    answer: string;
    answerOptions?: string|string[]
}