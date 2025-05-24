import { JobTitle, Name, NameContainer } from "./style";
import { useState } from 'react'
import { LABEL_CONFIG, NAME_CONFIG, nameFields } from "../../constants";
import SectionHeader from "../SectionHeader";
import Modal from "../Modal";
import UserInput from "../UserInput";

export default function NameHeader() {
    const [data, setData] = useState(NAME_CONFIG);
    const [tempData, setTempData] = useState(NAME_CONFIG);
    const [modalOpen, setModalOpen] = useState(false);

    const handleCloseModal = () => {
        setModalOpen(false);
        setTempData(data);
    }
    const handleOpenModal = () => {
        setModalOpen(true);
    }
    const handleSave = () => {
        setData(tempData);
        setModalOpen(false);
    }
    const handleUpdate = (e, fieldName) => {
        const newTempData = { ...data };
        newTempData[fieldName] = e.target.value;
        setTempData(newTempData);
    }
    return (
        <>
            <NameContainer>
                <SectionHeader onEdit={handleOpenModal} />
                <Name>{data.firstName} {data.lastName}</Name>
                <JobTitle>{data.jobTitle}</JobTitle>
            </NameContainer>
            <Modal
                title="Edit Name"
                isOpen={modalOpen} 
                onClose={handleCloseModal}
                onSave={handleSave}
            >
            {nameFields.map(d => (
                <UserInput
                    key={d}
                    fieldName={LABEL_CONFIG[d]}
                    fieldValue={tempData[d]}
                    handleInputChange={(e) => handleUpdate(e, d)}
                />
            ))}
            </Modal>
        </>
    )
}