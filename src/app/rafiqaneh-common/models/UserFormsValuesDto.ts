export interface UserFormsValuesDto {
    form: string;
    fields: {
        field: string,
        value: string
    }[]
}