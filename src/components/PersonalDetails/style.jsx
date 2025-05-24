import styled from 'styled-components'
import { MdCall, MdEmail, MdMyLocation } from 'react-icons/md'

export const Row = styled.div`
  margin: 10px 0;
`
export const Phone = styled(MdCall)`
  color: tan;
  font-size: 1.4em;
  padding-right: 20px;
  vertical-align:middle;
`
export const Email = styled(MdEmail)`
  color: tan;
  font-size: 1.4em;
  padding-right: 20px;
  vertical-align:middle;
`
export const Map = styled(MdMyLocation)`
  color: tan;
  font-size: 1.4em;
  padding-right: 20px;
  vertical-align:middle;
`