import styled from 'styled-components';
import { MdAdd, MdDeleteOutline } from 'react-icons/md'

export const Ul = styled.ul`
`
export const Li = styled.li`
  margin: 10px 0;
`
export const Plus = styled(MdAdd)`

`
export const InputRow = styled.div`
  display: flex;
`
export const Delete = styled(MdDeleteOutline)`
  margin: 25px 0 0 auto;
  font-size: 1.4em;
  cursor: pointer;
`
export const AddSkillRow = styled.div`
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    color: black; 
  }
`