import type {Medication,MedicationDose} from './models/types'

const icsDate=(value:string)=>new Date(value).toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'')
const escape=(value:string)=>value.replace(/\\/g,'\\\\').replace(/;/g,'\\;').replace(/,/g,'\\,').replace(/\r?\n/g,'\\n')

export function downloadCalendar(doses:MedicationDose[],medications:Medication[]){
  const events=doses.filter(d=>d.status==='PENDING').map(d=>{const m=medications.find(x=>x.id===d.medicationId);if(!m)return '';const start=new Date(d.scheduledTime),end=new Date(start.getTime()+15*60*1000);return ['BEGIN:VEVENT',`UID:${d.id}@meditrack`,`DTSTAMP:${icsDate(new Date().toISOString())}`,`DTSTART:${icsDate(start.toISOString())}`,`DTEND:${icsDate(end.toISOString())}`,`SUMMARY:${escape(`Take ${m.name}${m.strength?` ${m.strength}`:''}`)}`,`DESCRIPTION:${escape(`${m.dose}. ${m.foodInstruction||''} ${m.specialInstructions||''}`)}`,'END:VEVENT'].join('\r\n')}).filter(Boolean)
  const content=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//MediTrack//Medication Reminders//EN','CALSCALE:GREGORIAN','METHOD:PUBLISH',...events,'END:VCALENDAR'].join('\r\n')
  const url=URL.createObjectURL(new Blob([content],{type:'text/calendar;charset=utf-8'}));const link=document.createElement('a');link.href=url;link.download='meditrack-reminders.ics';link.click();URL.revokeObjectURL(url)
}
