export type AnswerKey='ageRange'|'gender'|'hasChildren'|'currentSituation'|'attemptHistory'|'mainTrigger'|'cravingExperience'|'mainMotivation'|'relationshipImpact'|'desiredOutcome';
export type AnswerValue=string|boolean|null;
export type Answers=Record<AnswerKey,AnswerValue>;
export type Question={id:AnswerKey;eyebrow:string;title:string;description?:string;options:{value:string|boolean;label:string}[]};
const choices=(labels:string[])=>labels.map((label,i)=>({value:String.fromCharCode(65+i),label}));
export const questions:Record<AnswerKey,Question>={
 ageRange:{id:'ageRange',eyebrow:'VAMOS COMEÇAR POR VOCÊ',title:'Qual é a sua idade?',description:'Para adaptar o caminho às suas respostas.',options:choices(['18 a 22 anos','23 a 29 anos','30 a 39 anos','40 anos ou mais'])},
 gender:{id:'gender',eyebrow:'SOBRE VOCÊ',title:'Você é homem ou mulher?',options:choices(['Homem','Mulher'])},
 hasChildren:{id:'hasChildren',eyebrow:'QUEM FAZ PARTE DA SUA HISTÓRIA',title:'Você tem filhos?',options:[{value:true,label:'Sim'},{value:false,label:'Não'}]},
 currentSituation:{id:'currentSituation',eyebrow:'SEU MOMENTO ATUAL',title:'Você está cansado de tentar mudar e sentir que volta ao mesmo lugar?',options:choices(['Sim, quero parar, mas ainda estou usando.','Já parei, mas tenho medo de voltar.','Estou tentando diminuir o consumo.','Quero aprender a lidar melhor com a vontade.'])},
 attemptHistory:{id:'attemptHistory',eyebrow:'OLHANDO PARA O SEU CAMINHO',title:'Quantas vezes você já disse “essa foi a última vez”?',options:choices(['Já perdi as contas.','Algumas vezes.','Uma vez.','Nunca passei por isso.'])},
 mainTrigger:{id:'mainTrigger',eyebrow:'RECONHEÇA SEUS GATILHOS',title:'Em que momento parece mais difícil dizer não à vontade?',options:choices(['Depois do trabalho ou à noite.','Quando recebo dinheiro ou fico sozinho.','Depois de brigas, estresse ou tristeza.','Quando encontro certas pessoas ou lugares.'])},
 cravingExperience:{id:'cravingExperience',eyebrow:'QUANDO A VONTADE APARECE',title:'Quando a vontade aparece, parece que ela toma conta dos seus pensamentos?',options:choices(['Sim, não consigo pensar em outra coisa.','Fico muito ansioso e inquieto.','Parece que faço tudo no automático.','Sinto vontade, mas geralmente consigo resistir.'])},
 mainMotivation:{id:'mainMotivation',eyebrow:'O QUE IMPORTA PARA VOCÊ',title:'O que você mais gostaria de recuperar na sua vida?',options:choices(['O controle sobre minhas decisões.','A confiança da minha família ou de quem amo.','Meu dinheiro e meus planos.','Minha saúde e minha tranquilidade.'])},
 relationshipImpact:{id:'relationshipImpact',eyebrow:'SUAS RELAÇÕES, NO SEU TEMPO',title:'O uso já abalou a confiança entre você e alguém importante?',options:choices(['Sim, principalmente na minha família.','Sim, em um relacionamento.','Sinto que decepcionei a mim mesmo.','Não percebo isso na minha vida.'])},
 desiredOutcome:{id:'desiredOutcome',eyebrow:'UM OLHAR PARA A FRENTE',title:'O que faria mais diferença na sua vida se você conseguisse lidar melhor com a vontade?',options:choices(['Passar pelos momentos difíceis sem recorrer ao uso.','Estar mais presente para quem amo.','Ter mais saúde e paz no dia a dia.','Voltar a construir meus planos para o futuro.'])},
};
