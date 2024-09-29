export interface IProfileQuestion {
    questionName: string;
    questionTitle?: string;
    questionDescription?: string;
    answer: string|null;
    type: 'select' | 'text' | 'textarea',
    answerValidation?: {
        maxValue?: number,
        minValue?: number,
        minLength?: number,
        maxLength?: number,
        isRequired?: boolean
    },
    options?: { title: string, value: string|null, imageUrl?: string }[];
}

export interface IProfileQuestions {
    questions: IProfileQuestion[];
}

export enum ProfileQuestions {
    ZaherFardi = 'zaher_fardi',
    EhsasChehreh = 'ehsas_chehreh'
}

export var sampleData : IProfileQuestions = {
            questions: [
                {
                    questionName: ProfileQuestions.ZaherFardi,
                    answer: null,
                    type: 'select',
                    options: [ {title:'نام خود را وارد کنید', value: null}]
                },
                {
                    questionName: ProfileQuestions.EhsasChehreh,
                    answer: null,
                    type: 'textarea',
                    questionTitle: 'احساس شما در مورد چهره های زیر جیست؟'
                },
            ]
        }

// function submit()
// {
//     let p : IProfileQuestions = {
//         questions: [
//             {
//                 questionName: ProfileQuestions.ZaherFardi,
//                 answer: this.form['apearance'].value,
//             },
//             {
//                 questionName: ProfileQuestions.EhsasChehreh,
//                 answer: this.form['apearance'].value,
//             },
//         ]
//     }
// }