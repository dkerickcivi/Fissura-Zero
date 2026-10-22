import {useEffect,useRef,useState} from 'react';
import {Pause,Play,Smartphone,ExternalLink} from 'lucide-react';
const VIDEO='/video/fissura-zero-demo.mp4';
export function ProductVideo(){
 const player=useRef<HTMLVideoElement>(null);
 const [playing,setPlaying]=useState(true),[failed,setFailed]=useState(false);
 useEffect(()=>{const video=player.current!;video.src=VIDEO;video.muted=true;void video.play()?.catch(()=>setPlaying(false));return()=>{video.pause();video.removeAttribute('src');video.load();};},[]);
 function toggle(){const video=player.current;if(!video)return;if(video.paused)void video.play()?.catch(()=>setPlaying(false));else video.pause();}
 return <figure className="video-preview"><figcaption><Smartphone size={15}/> VEJA O FISSURA ZERO FUNCIONANDO</figcaption><div className="demo-phone"><div className="demo-speaker" aria-hidden="true"/><div className="demo-screen"><video ref={player} src={VIDEO} poster="/video/fissura-zero-poster.webp" autoPlay muted loop playsInline preload="metadata" width="480" height="816" aria-label="Demonstração do Fissura Zero: movimentação das peças de um quebra-cabeça" onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)} onError={()=>setFailed(true)}/></div><div className="demo-home-indicator" aria-hidden="true"/></div>{failed?<p className="video-error">Não foi possível carregar a demonstração. <a href={VIDEO}>Abrir vídeo <ExternalLink size={13}/></a></p>:<button className="video-control" onClick={toggle} aria-label={playing?'Pausar demonstração':'Reproduzir demonstração'}>{playing?<Pause size={15}/>:<Play size={15}/>} {playing?'Pausar demonstração':'Reproduzir demonstração'}</button>}</figure>;
}
