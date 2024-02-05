import { InputText } from "./style";

export function Input ({
    placeholder,
    editable,
    fieldValue,
    onChangeText,
    keyboardType,
    maxLength,
    onBlur,
}){
    return(
        <InputText
            placeholder={placeholder}
            editable={editable}
            keyboardType={keyboardType}
            maxLength={maxLength}
            value={fieldValue}
            fieldValue={fieldValue}
            onChangeText={onChangeText}
            onBlur={onBlur}
        />
    )
}