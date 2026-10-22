import {UserRound,Quote} from 'lucide-react';
// Relatos e nomes fornecidos pelo responsável pelo produto; não são avaliações verificadas pela plataforma.
const testimonials=[
 {name:'Pedro Carvalho',age:35,quote:'Parece bobo à primeira vista, mas, quando a fissura vem, me ajuda bastante.'},
 {name:'Ana Almeida',age:23,quote:'Adorei o app. Foi uma das melhores decisões da minha vida.'},
 {name:'Flávio Campos',age:50,quote:'O app é muito fácil de mexer. Gostei muito da experiência que estou tendo.'},
];
export function Testimonials(){return <section className="testimonials" aria-labelledby="testimonials-title"><h2 id="testimonials-title">Feedbacks de quem usa</h2><div className="testimonial-list">{testimonials.map(person=><figure className="testimonial-card" key={person.name+person.age}><figcaption><span className="testimonial-avatar" aria-hidden="true"><UserRound size={19}/></span><div><strong>{person.name}</strong><span>{person.age} anos</span></div><Quote className="testimonial-quote-icon" size={19} aria-hidden="true"/></figcaption><blockquote>“{person.quote}”</blockquote></figure>)}</div><p className="testimonial-note">Experiências individuais. Os relatos não representam garantia de resultado.</p></section>}
