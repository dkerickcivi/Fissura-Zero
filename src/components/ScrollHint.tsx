import {useEffect,useState} from 'react';
import {ChevronDown} from 'lucide-react';
export function hasMoreBelow(height:number,viewport:number,top:number){return height-viewport-Math.max(0,top)>32;}
export function ScrollHint({pageKey}:{pageKey:string}){
 const [visible,setVisible]=useState(false);
 useEffect(()=>{
  setVisible(false);
  let idle:ReturnType<typeof setTimeout>|undefined;
  const check=()=>{setVisible(hasMoreBelow(document.documentElement.scrollHeight,window.innerHeight,window.scrollY));};
  const schedule=(delay=550)=>{clearTimeout(idle);idle=setTimeout(check,delay);};
  const scroll=()=>{setVisible(false);schedule();};
  const resize=()=>{setVisible(false);schedule(200);};
  const observer=typeof ResizeObserver!=='undefined'?new ResizeObserver(()=>schedule(200)):null;
  observer?.observe(document.body);
  window.addEventListener('scroll',scroll,{passive:true});window.addEventListener('resize',resize);window.addEventListener('orientationchange',resize);
  schedule(700);
  return()=>{clearTimeout(idle);observer?.disconnect();window.removeEventListener('scroll',scroll);window.removeEventListener('resize',resize);window.removeEventListener('orientationchange',resize);};
 },[pageKey]);
 function more(){const reduced=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;setVisible(false);window.scrollBy({top:window.innerHeight*.65,behavior:reduced?'instant':'smooth'});}
 return visible?<div className="scroll-hint-wrap"><button className="scroll-hint" onClick={more} aria-label="Rolar para ver mais conteúdo">Role para ver mais <ChevronDown size={19}/></button></div>:null;
}
