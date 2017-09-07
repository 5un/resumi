import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import ResumeEducationItem from './ResumeEducationItem'
import { H2, SectionBody } from './elements'

const SectionContainer = styled.section`
  margin-bottom: 5mm;
`;

const Cell = styled.div`
  display: inline-box;
  width: 25%;
`

export default class ResumeEducationSection extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    const { data } = this.props;

    return (
      <SectionContainer>
        <H2>Education</H2>
        <SectionBody>
        {_.map(data, item => (
          <ResumeEducationItem data={item}/>
        ))}
        </SectionBody>
      </SectionContainer>

    )
  }
}