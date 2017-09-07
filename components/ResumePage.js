import React from 'react'
import styled from 'styled-components'

const ResumePageWrapper = styled.section`
  font-family: 'Montserrat';
  font-weight: 200;
  font-size: 10pt;
`;

export default class ResumePage extends React.Component {
  render () {
    return (
      <ResumePageWrapper>
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css?family=Montserrat:200,500');
        `}</style>
        {this.props.children}
      </ResumePageWrapper>
    )
  }
}