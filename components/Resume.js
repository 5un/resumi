import React from 'react'
import ResumePage from './ResumePage'
import ResumeHead from './ResumeHead'
import ResumeEducationSection from './ResumeEducationSection'
import ResumeExperienceSection from './ResumeExperienceSection'
import ResumeAwardsSection from './ResumeAwardsSection'
import ResumeProjectsSection from './ResumeProjectsSection'
import ResumeSkillsSection from './ResumeSkillsSection'

import styled from 'styled-components'

const Row = styled.div`
  width: 100%;
`;

const LeftCol = styled.div`
  display: inline-block;
  max-width: 60%;
  vertical-align: top;
`;

const RightCol = styled.div`
  display: inline-block;
  max-width: calc(40% - 30pt);
  margin-left: 30pt;
  vertical-align: top;
`;

export default class Resume extends React.Component {
  render () {
    const { data } = this.props
    return (
      <ResumePage>
        <ResumeHead data={data}/>
        <Row>
          <LeftCol>
            <ResumeEducationSection data={data.education} />
            <ResumeExperienceSection data={data.experiences} />
          </LeftCol>
          <RightCol>
            <ResumeAwardsSection data={data.awards} />
            <ResumeProjectsSection data={data.projects} />
          </RightCol>
        </Row>
        <ResumeSkillsSection data={data.skillCategories} />
      </ResumePage>
    )
  }
}