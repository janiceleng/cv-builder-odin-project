import PageHeader from './components/PageHeader'
import JobSection from './components/Job'
import Education from './components/Education'
import Skills from './components/Skills'
import PersonalDetails from './components/PersonalDetails'
import { SectionContainer, ColumnLeft, ColumnRight, Wrapper, Circle } from './style'
import ProfileSection from './components/Profile'

function App() {

  return (
    <>
      <Circle>JL</Circle>
      <PageHeader />

      <Wrapper>
        <ColumnLeft>
          <SectionContainer $first={true}>
            <ProfileSection />
          </SectionContainer>

          <SectionContainer>
            <JobSection />
          </SectionContainer>
        </ColumnLeft>

        <ColumnRight>
          <SectionContainer $first={true}>
            <PersonalDetails />
          </SectionContainer>
          
          <SectionContainer>
            <Education />
          </SectionContainer>
          
          <SectionContainer>
            <Skills />
          </SectionContainer>
        </ColumnRight>

      </Wrapper>
      
    </>
  )
}

export default App
