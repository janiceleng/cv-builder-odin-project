import { useState } from "react";
import Modal from "../Modal";
import { Li, Ul, Plus, InputRow, Delete, AddSkillRow } from "./style";
import UserInput from "../UserInput";
import SectionHeader from "../SectionHeader";
import { SKILLS_CONFIG } from "../../constants";

export default function Skills() {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState(SKILLS_CONFIG);
  const [newKey, setNewKey] = useState(6);
  const [tempData, setTempData] = useState(data);

  const handleCloseModal = () => {
    setModalOpen(false);
    setTempData(data);
  }
  const handleOpenModal = () => {
    setModalOpen(true);
  }
  const handleDeleteSkill = (i) => {
    const newTempData = [ ...tempData ];
    newTempData.splice(i, 1);
    setTempData(newTempData);
  }
  const handleUpdateSkill = (e, key) => {
    const newTempData = [ ...tempData ];
    newTempData.filter(d => {
      if(d.key === key) {
        d.skill = e.target.value;
      }
    })
    setTempData(newTempData);
  }
  const handleAddSkill = () => {
    const key = newKey + 1;
    setNewKey(key);

    const newTempData = [ ...tempData ];
    newTempData.push({ key, skill: ''});
    setTempData(newTempData);
  }
  const handleSaveSkills = () => {
    setData(tempData);
    setModalOpen(false);
  }
  

  return (
    <>
      <SectionHeader title="Skills" onEdit={handleOpenModal} />
      <Ul>
        {data.map((d) => (
          <Li key={d.key}>
            {d.skill}
          </Li>
        ))}
      </Ul>
      <Modal
        title="Edit Skills"
        isOpen={modalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveSkills}
      >
        
        {tempData.map(({ key, skill }, i) => (
          <InputRow key={key}>
            <UserInput
              fieldValue={skill}
              handleInputChange={(e) => handleUpdateSkill(e, key)}
            />
            <Delete onClick={() => handleDeleteSkill(i)}/>
          </InputRow>
        ))}
        <AddSkillRow
          onClick={handleAddSkill}
        >
          <Plus/> Add New Skill
        </AddSkillRow>
      </Modal>
    </>
  )
}