import React from 'react'
import ReactDOM from 'react-dom'
import Link from 'next/link'
import Head from 'next/head'
import profile from '../mock-data/profile.json'
import PageContainer from '../components/PageContainer'
import Resume from '../components/Resume'

import styled from 'styled-components'

const PreviewBox = styled.div`
  width: 8.5in;
  height: 11.0in;
  padding: 0.75in;
  background-color: white;
  border: 1px solid gray;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

export default class Index extends React.Component {

  render () {
    return (
      <div>
        <style jsx global>{`
          body {
            background-color: #dddddd;
            margin: 0;
            padding: 0;
            border: 0;
            font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
            box-sizing: border-box;
          }

          .only-print {
            display: none;
          }

          @media print {
            body {
              margin: 0;
            }

            .no-print {
              display: none;
            }

            .only-print {
              display: block !important;
              margin: 0;
            }
          }

          @page {
            margin-top: 0.75in;
            margin-bottom: 0.0in;
            margin-left: 0.75in;
            margin-right: 0.75in;    
          }

        `}</style>
        <div className="no-print">
          <PageContainer>
            <h1>Preview of your resume</h1>
            <PreviewBox>
            <Resume data={profile}/>
            </PreviewBox>
          </PageContainer>
        </div>
        <div className="only-print">
          <Resume data={profile}/>
        </div>
      </div>
    )
  }
}