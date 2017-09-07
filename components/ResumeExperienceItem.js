import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import { H3, SubHeader, Details, UL } from './elements'

const ItemContainer = styled.section`
  margin-bottom: 5mm;
`;

const Cell = styled.div`
  display: inline-box;
  width: 25%;
`

const FloatRightInfo = styled.div`
  float: right;
  white-space: pre-line;
`

const ExperienceDetail = styled.div`
  margin-top: 1mm;
`

export default class ResumeExperienceItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    const { data } = this.props;
    return (
      <ItemContainer>
        <FloatRightInfo>
          {data.time}
        </FloatRightInfo>
        <H3>{data.position}</H3>
        <SubHeader>
          <FloatRightInfo>
            {data.location}
          </FloatRightInfo>
          <div>
            {data.company}
          </div>
        </SubHeader>
        <ExperienceDetail>
          <Details>
            <UL>
              {_.map(data.points, point => (
                <li>{point}</li>
              ))}
            </UL>
          </Details>
        </ExperienceDetail>
      </ItemContainer>

    )
  }
}