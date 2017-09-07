import React from 'react'
import styled from 'styled-components'
import { H3, SubHeader, Details } from './elements' 

const ItemContainer = styled.section`
  margin-bottom: 5mm;
`;

const Cell = styled.div`
  display: inline-box;
  width: 25%;
`

const FloatRightInfo = styled.div`
  float: right;
`

export default class ResumeEducationItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    const { data } = this.props;
    return (
      <ItemContainer>
        <H3>{data.degree}</H3>
        <SubHeader>
          {data.useShortGraduationForm && <FloatRightInfo>
            <Details>
              {data.graduation}
            </Details>
          </FloatRightInfo>}
          {`${data.institution}`}
        </SubHeader><br />
        <Details>
          {!data.useShortGraduationForm && <div>Graduation: {data.graduation}</div>}
          {data.focus && 
            <div>
              Focus: {data.focus}
            </div>
          }
          {data.description && 
            <div>
              {data.description}
            </div>
          }
        </Details>
      </ItemContainer>

    )
  }
}