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

export default class ResumeProjectItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    const { data } = this.props;
    return (
      <ItemContainer>
        <H3>{data.name}</H3>
        <SubHeader>{data.description}</SubHeader>
        <Details>
          <UL>
            {data.role &&
              <li>Role: {data.role}</li>
            }
            {data.details &&
              <li>{data.details}</li>
            }
            {data.points &&
              _.map(data.points, p => (<li>{p}</li>))
            }
          </UL>

        </Details>
      </ItemContainer>

    )
  }
}