import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import { H3, UL, SubHeader, Details } from './elements'

const ItemContainer = styled.section`
  margin-bottom: 2.5mm;
`;

const Cell = styled.div`
  display: inline-box;
  width: 25%;
`

export default class ResumeAwardsItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    const { data } = this.props;
    return (
      <ItemContainer>
        <H3>{data.name}</H3>
        <SubHeader>{data.competition}</SubHeader><br />
        <Details>
          {data.project &&
            <div>Project: {data.project}</div>
          }
          {data.description &&
            <div>{data.description}</div>
          }
          {data.points &&
            <UL>
              {_.map(data.points, point => (
                <li>{point}</li>
              ))}
            </UL>
          }

        </Details>
      </ItemContainer>

    )
  }
}