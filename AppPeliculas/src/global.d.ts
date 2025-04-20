import {StringSchema} from 'Yup'

declare module 'Yup' {
    interface StringSchema {
        primeraLetraMayuscula(): this;
    }
}