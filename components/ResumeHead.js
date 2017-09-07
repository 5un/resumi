import React from 'react'
import styled from 'styled-components'
import { H1, B } from './elements'
import FaGlobe from 'react-icons/lib/fa/globe'
import FaEnvelopeO from 'react-icons/lib/fa/envelope-o'
import GoMarkGithub from 'react-icons/lib/go/mark-github'
import FaMobile from 'react-icons/lib/fa/mobile'

const ResumeHeadContainer = styled.section`
  margin-bottom: 7.5mm;
`;

const Cell = styled.div`
  display: inline-box;
  margin-right: 15mm;
`

const CellLast = styled.div`
  display: inline-box;
`

const TagLine = styled.div`
  white-space: pre-line;
  margin: 2mm 0;
  letter-spacing: 1px;
  line-height: 150%;
`

const TopH1 = styled.h1`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 20pt;
  margin: 0;
  letter-spacing: 10px;
  color: #1ED760;
`;

export default class ResumeHead extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    const { data } = this.props;

    return (
      <ResumeHeadContainer>
        <TopH1>{data.firstname} &nbsp;{data.lastname}</TopH1>
        <TagLine>{data.tagline}</TagLine>
        <div>
          <Cell>
            <div>
              <B><FaGlobe />&nbsp;  {data.website}</B>
            </div>
          </Cell>
          <Cell>
            <div>
              <B><FaEnvelopeO />&nbsp;  {data.email}</B>
            </div>
          </Cell>
          <Cell>
            <div>
              <B><GoMarkGithub />&nbsp;  {data.github}</B>
            </div>
          </Cell>
          <CellLast>
            <div>
              <B><FaMobile />&nbsp;  {data.phone}</B>
            </div>
          </CellLast>
        </div>
      </ResumeHeadContainer>

    )
  }
}