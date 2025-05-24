import { Row, Header, PlusButton, EditButton, ProfileHeader } from './style';

export default function SectionHeader({ title, largeTitle, onClick, onEdit }) {

  return (
    <Row>
      {title && <Header>{title}</Header>}
      {largeTitle && <ProfileHeader>{largeTitle}</ProfileHeader>}
      {onClick && <PlusButton onClick={onClick} />}
      {onEdit && <EditButton onClick={onEdit} />}
    </Row>
  )
}