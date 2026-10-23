// Configure VITE_CHECKOUT_URL in .env.local, then rebuild. Never append answers.
export const CHECKOUT_URL:string=https://pay.cakto.com.br/4jobh2w_1233774'';
export const PRICE_CENTS=2990;
export const PRICE=new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(PRICE_CENTS/100);
export function validCheckout(value:string){try{return new URL(value).protocol==='https:';}catch{return false;}}
