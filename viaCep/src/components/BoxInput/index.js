
import { Input } from '../Input'
import {Label} from '../Label/index'
import {FieldContent} from './style'

export const BoxInput = ({
    fieldWidth = 100,
    editable = false,
    textLabel,
    placeholder,
    fieldValue = null,
    onChangeText = null,
    keyboardType,
    maxLength,
}) => {
    return(

        <FieldContent fieldWidth={fieldWidth}>

            <Label textLabel={textLabel}/>

            <Input
                placeholder={placeholder}
                editable={editable}
                value={fieldValue}
                keyboardType={keyboardType}
                maxLength={maxLength}
                fieldValue={fieldValue}
                onChangeText={onChangeText}
            />

        </FieldContent>

    )
}