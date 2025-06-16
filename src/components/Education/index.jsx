import { useState } from "react";
import { EducationContainer, School, Degree, Year, Row } from "./style";
import { Edit } from '../shared-style'
import Modal from '../Modal'
import UserInput from '../UserInput'
import { EDUCATION_CONFIG, educationFields } from "../../constants";
import SectionHeader from "../SectionHeader";

export default function Education({ updateEducation, deleteEducation, isNew }) {
  const [modalOpen, setModalOpen] = useState(isNew ? true: false);
  const [data, setData] = useState(EDUCATION_CONFIG);
  const [selectedEducation, setSelectedEducation] = useState({})

  let counter = 3;
  const emptyEducation = educationFields.reduce((res, d) => {
    res[d] = '';
    return res;
  }, { key: counter, isNew: true })

  const handleOpenModal = (education) => {
    setModalOpen(true);
    setSelectedEducation(education);
  }
  const handleCloseModal = () => {
    setModalOpen(false);
    if(isNew){
      deleteEducation();
    }
  }
  const handleTempData = (e, fieldName) => {
    const newTempData = { ...selectedEducation };
    newTempData[fieldName] = e.target.value;
    setSelectedEducation(newTempData);
  }
  const handleUpdateEducation = () => {
    const newEducation = selectedEducation.isNew ? 
      data.concat({ ...selectedEducation, isNew: false }) : 
      data.map(d => d.key === selectedEducation.key ? selectedEducation : d)
    setData(newEducation);
    setModalOpen(false);
  }
  const handleDeleteEducation = () => {
    const newEducation = data.filter(d => d.key !== selectedEducation.key)
    setData(newEducation);
    setModalOpen(false);
  }
  
  return (
    <>
      <SectionHeader title="Education" onClick={() => handleOpenModal(emptyEducation)} />
      {data.map(d => (
        <EducationContainer key={d.key}>
          <Row>
            <Degree>{d.degree}</Degree>
            <Edit onClick={() => handleOpenModal(d)}/>
          </Row>
          <School>{d.school}</School>
          <Year>{d.yearFrom} - {d.yearTo}</Year>
        </EducationContainer>
      ))}

      <Modal 
        title="Edit Education"
        isOpen={modalOpen} 
        onClose={handleCloseModal}
        onSave={handleUpdateEducation}
        onDelete={handleDeleteEducation}
      >
        {educationFields.map((fieldName) => 
          <UserInput 
            key={fieldName}
            fieldValue={selectedEducation[fieldName]}
            fieldName={fieldName}
            handleInputChange={(e) => handleTempData(e, fieldName)}
          />
        )}
      </Modal>
    </>
  )
}