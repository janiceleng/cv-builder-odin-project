import { Button, ButtonRow, Close, DeleteButton, ModalBg, ModalContainer, TitleDiv, TopButtonRow } from './style'

export default function Modal({ isOpen, onClose, onDelete, onSave, children, title }) {
  if(!isOpen) return null;

  return (
    <ModalBg onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <TopButtonRow>
          <TitleDiv>{title}</TitleDiv>
          <Close onClick={onClose} />
        </TopButtonRow>
        
        {children}

        <ButtonRow>
          {onDelete && <DeleteButton onClick={onDelete}>Delete</DeleteButton>}
          <Button onClick={onSave}>Save</Button>
        </ButtonRow>
      </ModalContainer>
    </ModalBg>
  )
}