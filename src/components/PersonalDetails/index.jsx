import { useState } from 'react'
import { Row, Phone, Email, Map } from './style'
import { LABEL_CONFIG, PERSONAL_DETAILS_CONFIG, personalDetailFields } from '../../constants'
import SectionHeader from '../SectionHeader';
import Modal from '../Modal';
import UserInput from '../UserInput';

export default function PersonalDetails() {
  const [data, setData] = useState(PERSONAL_DETAILS_CONFIG);
  const [tempData, setTempData] = useState(PERSONAL_DETAILS_CONFIG)
  const [modalOpen, setModalOpen] = useState(false);

  const handleEdit = () => {
    setModalOpen(true);
  }
  const handleCloseModal = () => {
    setTempData(data);
    setModalOpen(false);
  }
  const handleSave = () => {
    setData(tempData);
    setModalOpen(false);
  }
  const handleUpdateSkill = (e, d) => {
    const newTempData = { ...tempData };
    newTempData[d] = e.target.value;
    setTempData(newTempData);
  }
  return (
    <>
      <SectionHeader onEdit={handleEdit} />
      <Row>
        <Phone/> {data.phone}
      </Row>
      <Row>
        <Email /> {data.email}
      </Row>
      <Row>
        <Map /> {data.location}
      </Row>
      <Modal
        title="Edit Personal Details"
        isOpen={modalOpen} 
        onClose={handleCloseModal}
        onSave={handleSave}
      >
        {personalDetailFields.map(d => (
          <UserInput
            key={d}
            fieldName={LABEL_CONFIG[d]}
            fieldValue={tempData[d]}
            handleInputChange={(e) => handleUpdateSkill(e, d)}
          />
        ))}
      </Modal>
    </>
  )
}