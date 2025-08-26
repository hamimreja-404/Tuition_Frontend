import { Section } from 'lucide-react'
import React from 'react'
import ClassesSection from './Class'
import BranchesSection from './Branch'
import AdmissionProcedureSection from './Procedure'
import FeeStructureSection from './Fee'

export default function Admission() {
  return (
    <section>
        <ClassesSection/>
        <BranchesSection/>
        <AdmissionProcedureSection/>
        <FeeStructureSection/>
    </section>
  )
}
