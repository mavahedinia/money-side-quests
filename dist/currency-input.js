// Currency editing accepts plain dollars or correctly grouped dollar amounts.
// Empty is distinct from zero, so unknown registered room stays unknown.
export function formatCurrencyInput(value){return value===null||value===undefined?'':'$ '+new Intl.NumberFormat('en-CA',{minimumFractionDigits:2,maximumFractionDigits:2}).format(value)}
export function parseCurrencyInput(value){const text=String(value??'').trim().replace(/^\$\s*/,'');if(!text)return null;if(!/^(?:(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d{0,2})?|\.\d{1,2})$/.test(text))return NaN;const amount=Number(text.replace(/,/g,''));return Number.isFinite(amount)?amount:NaN}
