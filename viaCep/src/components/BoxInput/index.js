
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
    keyTipe = 'default',
    maxLenght,
    minLenght
}) => {
    return(

        <FieldContent fieldWidth={fieldWidth}>

            <Label textLabel={textLabel}/>

            <Input
                placeholder={placeholder}
                editable={editable}
                keyTipe={keyTipe}
                maxLenght={maxLenght}
                fieldValue={fieldValue}
                onChangeText={onChangeText}
                minLenght={minLenght}
            />

        </FieldContent>

    )
}