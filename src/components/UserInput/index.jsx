import { InputContainer, InputLabel, Input } from "./style"
import { LABEL_CONFIG } from "../../constants"

export default function UserInput({ fieldValue, fieldName, handleInputChange, textArea }) {
  return (
    <InputContainer>
      <InputLabel>
        {LABEL_CONFIG?.[fieldName] || fieldName || ''}
      </InputLabel>
      {!textArea && <Input
        type="text"
        value={fieldValue || ''}
        onChange={handleInputChange}
      />}
    </InputContainer>
  )
}