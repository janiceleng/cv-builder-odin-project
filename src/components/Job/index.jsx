import { useState } from 'react'
import { EXPERIENCE_CONFIG, jobFields } from '../../constants'
import { JobContainer,
  TitleDiv, CompanyDiv, YearDiv, Ul, Flex, DescriptionDiv
 } from './style'
import { Edit } from '../shared-style'
import Modal from '../Modal'
import UserInput from '../UserInput'
import SectionHeader from '../SectionHeader'
import { AddSkillRow, Delete, InputRow, Plus } from '../Skills/style'

export default function Job({ updateJob, deleteJob, jobInfo, data, isNew }) {

  const [modalOpen, setModalOpen] = useState(isNew ? true : false);
  const [jobs, setJobs] = useState(EXPERIENCE_CONFIG);
  const [selectedJob, setSelectedJob] = useState();
  const [newKey, setNewKey] = useState(EXPERIENCE_CONFIG.length + 1)

  const emptyJob = jobFields.reduce((res, d) => {
    if(d === 'description') {
      res[d] = []
    } else {
      res[d] = '';
    }
    return res;
  }, { key: newKey, isNew: true });
  
  
  const handleOpenModal = (job) => {
    setModalOpen(true);
    setSelectedJob(job);
    setNewKey(newKey + 1);
  }
  const handleCloseModal = (e) => {
    setModalOpen(false);
    if(isNew) {
      deleteJob();
    }
  }
  const handleTempData = (e, fieldName) => {
    const newSelectedJob = { ...selectedJob };
    newSelectedJob[fieldName] = e.target.value;
    setSelectedJob(newSelectedJob);
  }
  const handleUpdateJob = () => {
    const newJobs = selectedJob.isNew ? 
      jobs.concat({ ...selectedJob, isNew: false }) : 
      jobs.map(d => d.key === selectedJob.key ? selectedJob : d)
    setJobs(newJobs);
    setModalOpen(false);
  }
  const handleDeleteJob = () => {
    const newJobs = jobs.filter(d => d.key !== selectedJob.key)
    setJobs(newJobs);
    setModalOpen(false);
  }
  const handleAddDescription = () => {
    const tempDescriptions = selectedJob.description.concat([{ key: 3, bullet: '' }])
    setSelectedJob({ ...selectedJob, description: tempDescriptions })
  }
  const handleDeleteDescription = (key) => {
    const tempDescriptions = selectedJob.description.filter((d) => d.key !== key);
    setSelectedJob({ ...selectedJob, description: tempDescriptions })
  }
  const handleUpdateDescription = (e, key) => {
    const tempDescriptions = [ ...selectedJob.description ];
    tempDescriptions.map(d => {
      if(d.key === key) {
        d.bullet = e.target.value;
        return d;
      }
    })
    setSelectedJob({ ...selectedJob, description: tempDescriptions })
  }
  return (
    <>
      <SectionHeader title="Experience" onClick={() => handleOpenModal(emptyJob)} />
      
      {jobs.map((d) => {
        return (
          <JobContainer key={'a' + d.key}>
            <Flex>
              <TitleDiv>{d.jobTitle}</TitleDiv>
              <Edit onClick={() => handleOpenModal(d)} />
            </Flex>
            <CompanyDiv>{d.company}</CompanyDiv>
            <YearDiv>{d.yearFrom} - {d.yearTo}</YearDiv>
            <Ul>{d.description.map(({ key, bullet }) => (
              <li key={key}>{bullet}</li>
            ))}</Ul>
          </JobContainer>
        )
      })}
      <Modal 
        title="Edit Experience"
        isOpen={modalOpen} 
        onClose={handleCloseModal}
        onDelete={handleDeleteJob}
        onSave={handleUpdateJob}
      >
        {modalOpen && jobFields.map((fieldName) => {
          if(fieldName !== 'description') {
            return (
              <UserInput 
                key={fieldName}
                fieldValue={selectedJob[fieldName]}
                fieldName={fieldName}
                handleInputChange={(e) => handleTempData(e, fieldName)}
              />
            )
          } 
          else {
            return (
              <>
              <DescriptionDiv>Descriptions</DescriptionDiv>
              {console.log(selectedJob)}
              {selectedJob.description.map(d => (
                <InputRow key={d.key}>
                  <UserInput
                    fieldValue={d.bullet}
                    handleInputChange={(e) => handleUpdateDescription(e, d.key)}
                  />
                  <Delete onClick={() => handleDeleteDescription(d.key)}/>
                </InputRow>
              ))}
                <AddSkillRow
                  onClick={handleAddDescription}
                >
                  <Plus /> Add New Description
                </AddSkillRow>
              </>
            )
          }
        })}
                    
      </Modal>
      
    </>
  )
}

