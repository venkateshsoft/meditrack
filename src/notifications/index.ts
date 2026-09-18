export async function enableNotifications(){if(!('Notification'in window))return false;return (await Notification.requestPermission())==='granted'}
export function notifyMedication(message:string){if('Notification'in window&&Notification.permission==='granted')new Notification('Medication Reminder',{body:message,tag:'meditrack-dose'})}
