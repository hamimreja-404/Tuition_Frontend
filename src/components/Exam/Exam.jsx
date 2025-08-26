import React from 'react'
import DownloadAdmitCardSection from './Admit'
import ApplyForExamSection from './Upcoming'
import DownloadMarksheetSection from './Marksheet'

export default function Exam() {
  return (
    <>
        <ApplyForExamSection/>
        <DownloadAdmitCardSection/>
        <DownloadMarksheetSection/>
    </>
  )
}
