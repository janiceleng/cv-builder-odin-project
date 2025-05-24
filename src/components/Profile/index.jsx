import { PROFILE_CONFIG } from '../../constants';
import Modal from '../Modal';
import SectionHeader from '../SectionHeader'
import UserInput from '../UserInput';
import { useState } from 'react'
import { TextArea } from './style'

export default function ProfileSection() {
  
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState(PROFILE_CONFIG);
  const [tempData, setTempData] = useState(PROFILE_CONFIG);
  
  const handleOpenModal = () => {
    setModalOpen(true);
  }
  const handleCloseModal = () => {
    setModalOpen(false);
    setTempData(data);
  }
  const handleUpdateProfile = (e) => {
    var newTempData = data;
    newTempData = e.target.value;
    setTempData(newTempData);
  }
  const handleSaveProfile = () => {
    setData(tempData);
    setModalOpen(false);
  }
  return (
    <>
      <SectionHeader largeTitle="Profile" onEdit={handleOpenModal} />
      <div>
        {data}
      </div>
      <Modal 
        title="Edit Profile"
        isOpen={modalOpen} 
        onClose={handleCloseModal}
        onSave={handleSaveProfile}
      >
        <UserInput textArea fieldValue={tempData} />
        <TextArea value={tempData} onChange={handleUpdateProfile} />
      </Modal>
    </>
  )
}