import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import ResumeProjectItem from './ResumeProjectItem'
import { H2, H3, B, SectionBody } from './elements'

const SectionContainer = styled.section`
  margin-bottom: 10mm;
`;

const SkillCategory = styled.div`
  margin-bottom: 0mm;
`

const SkillItem = styled.div`
  display: inline-block; 
  margin: 2pt;
  padding: 2pt;
  border: 1px solid #cccccc;
  border-radius: 4px;
`

export default class ResumeSkillsSection extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    const { data } = this.props;

    return (
      <SectionContainer>
        <H2>Skills</H2>
        <SectionBody>
        {_.map(data, category => (
          <SkillCategory>
            <B>{category.name}: </B> {_.map(category.skills, skill => (
              <SkillItem>{skill.name}</SkillItem>
            ))}
          </SkillCategory>
        ))}
        </SectionBody>
      </SectionContainer>

    )
  }
}