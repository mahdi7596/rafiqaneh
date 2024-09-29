export interface IGeneralTag {
    text: string|null;
    classes?: string;
}

export declare type ITextTag  = string | IGeneralTag;

export interface IFormField {
    fieldName: string;
    fieldTitle?: string;
    label?: ITextTag;
    fieldDescription?: string;
    value: string | number | IUploadFile | null;
    type: 'select' | 'imageselect' | 'input' | 'textarea' | 'datepicker' | 'radioselect' | 'slider' | 'colorpicker' | 'audioselect',
    inputType?: 'text' | 'tel' | 'number' | 'checkbox' | 'file' | 'hidden',
    inputClasses?: string;
    sliderOption?: {step: number, max: number, min: number}, 
    classes?: string,
    placeHolder?: string;
    validation?: IFieldValidation,
    options?: IImageSelectOption[];
    previewUploadImage?:boolean; // default is true
}
export interface IFieldValidation {
    maxValue?: number,
    minValue?: number,
    minLength?: number,
    maxLength?: number,
    isRequired?: boolean
}

export interface IUploadFile {
    uploadedFile: string | null;
    newFile: File | null;
}

export interface ISelectOption {
    title: string|null,
    value: string | null,
}
export interface IImageSelectOption extends ISelectOption {
    srcUrl?: string,
    imageClass?: string;
    mediaType?: string;
    contentClass?: string
}

export interface IFormDefinitionDto {
    formName?: string;
    fields: IFormField[];
    formValidations?: IFormValidationDto;
}

export interface IFormStepDto {
    form: IFormDefinitionDto,
    stepTitle: string|null,
}

export interface IMultiStepFormDefinition {
    steps: IFormStepDto[];
    currentStep?: number;
    submitApi?: string;
    returnUrl?: string;
    // validateOnStep?: boolean
}

export interface IFormValidationDto {
    orFieldValidations?: { fieldName: string, validation: IFieldValidation} [];
    orFieldValidationsMessage?: string;
}

export var sampleFormData: IFormDefinitionDto = {
    fields: [
        {
            fieldName: 'test',
            value: null,
            type: 'input',
            inputType: 'text',
            fieldTitle: 'نام خود را وارد کنید',
            options: [{ title: 'نام خود را وارد کنید', value: null }],
            validation: { isRequired: true }
        },
        {
            fieldName: 'test2',
            value: null,
            type: 'input',
            inputType: 'number',
            fieldTitle: 'سن خود را وارد کنید',
            validation: { minValue: 3, maxValue: 10 }
        },
        {
            fieldName: 'gender',
            value: 'm',
            type: 'select',
            fieldTitle: 'جنسیت',
            options: [{ title: 'مرد', value: 'm' }, { title: 'زن', value: 'f' }]
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