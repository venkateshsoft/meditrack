export type DoseStatus = 'PENDING'|'TAKEN'|'SKIPPED'|'MISSED'|'SNOOZED'
export type Frequency = 'Once daily'|'Twice daily'|'Three times daily'|'Four times daily'|'Every 6 hours'|'Morning'|'Afternoon'|'Evening'|'Bedtime'
export interface Patient { id:string; name:string; dob?:string; gender?:string; contact?:string }
export interface Allergy { id:string; name:string; severity:'Mild'|'Moderate'|'Severe'; notes?:string }
export interface Vitals { systolicBP?:string; diastolicBP?:string; heartRate?:string; temperature?:string; weight?:string; height?:string; oxygenSaturation?:string; respiratoryRate?:string; [key:string]:string|undefined }
export interface Prescription { id:string; image?:string; fileName?:string; fileType?:string; scannedAt:string; patientName?:string; doctorName?:string; facilityName?:string; uhid?:string; ageSex?:string; billDate?:string; prescriptionDate?:string; vitals?:Vitals; diagnosis?:string; physicianAdvice?:string; ocrText?:string; source:'scan'|'demo'|'manual'; status:'DRAFT'|'CONFIRMED' }
export interface Medication { id:string; prescriptionId?:string; name:string; genericName?:string; strength:string; dose:string; frequency:Frequency; route:string; startDate:string; endDate:string; durationDays:number; foodInstruction:string; specialInstructions:string; reminderTimes:string[]; confidence?:number; status:'ACTIVE'|'COMPLETED'|'DISCONTINUED' }
export interface MedicationDose { id:string; medicationId:string; scheduledTime:string; status:DoseStatus; actualTime?:string }
export interface Store { patient:Patient; allergies:Allergy[]; prescriptions:Prescription[]; medications:Medication[]; doses:MedicationDose[] }
