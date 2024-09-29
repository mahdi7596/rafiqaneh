export interface MissionDto {
    title: string,
    content: string,
    status: 'unlocked' | 'locked' | 'passed',
    timer: boolean,
    link: string;
    formName: string,
    buttonTitle?: string;
}