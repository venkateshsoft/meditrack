import type { Store } from '../models/types'
const key='meditrack-v2'; const id=()=>crypto.randomUUID()
export const emptyStore=():Store=>({patient:{id:id(),name:'Your profile'},allergies:[],prescriptions:[],medications:[],doses:[]})
export function load():Store { try { return JSON.parse(localStorage.getItem(key)||'') } catch { return emptyStore() } }
export function save(value:Store){ localStorage.setItem(key,JSON.stringify(value)) }
export { id }
