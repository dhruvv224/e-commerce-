export const required=(value)=>
value || (typeof value == 'number' && value===0)
?undefined
:"This field is required"