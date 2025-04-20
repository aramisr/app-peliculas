import { Field, useFormikContext } from "formik";
import ReactMarkDown from "react-markdown";
import '../assets/css/FormGroupMarkDown.css';

export default function FormGroupMarkDown(props: formGroupMarkDownProps){
    const {values} = useFormikContext<any>();

    return (
        <div className="form-group form-markdown">
            <div>
                <label>{props.label}</label>
                <div>
                    <Field name={props.campo} as="textarea" className="form-control" />
                </div>
            </div>
            <div>
                <label>{props.label} (preview):</label>
                <div className="markdown-container">
                    <ReactMarkDown>{values[props.campo]}</ReactMarkDown>
                </div>
            </div>
        </div>
    )
}
interface formGroupMarkDownProps{
    campo: string;
    label: string;
    texto?: string;
}