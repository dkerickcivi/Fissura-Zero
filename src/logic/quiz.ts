import type {Answers,AnswerKey,AnswerValue} from '../data/questions';
export type Step=AnswerKey|'education1'|'education2'|'result'|'offer';
export const emptyAnswers=():Answers=>({ageRange:null,gender:null,hasChildren:null,currentSituation:null,attemptHistory:null,mainTrigger:null,cravingExperience:null,mainMotivation:null,relationshipImpact:null,desiredOutcome:null});
export function makeFlow(answers:Answers):Step[]{return ['ageRange','gender',...(answers.ageRange&&answers.ageRange!=='A'?['hasChildren' as const]:[]),'currentSituation','attemptHistory','mainTrigger','cravingExperience','education1','mainMotivation','relationshipImpact','desiredOutcome','education2','result','offer'];}
export function saveAnswer(answers:Answers,key:AnswerKey,value:AnswerValue):Answers{const next={...answers,[key]:value};if(key==='ageRange'&&value==='A')next.hasChildren=null;return next;}
export const isFamily=(answers:Answers)=>answers.hasChildren===true;
export const summaries={
 mainTrigger:{A:'Depois do trabalho ou à noite',B:'Ao receber dinheiro ou ficar sozinho',C:'Após brigas, estresse ou tristeza',D:'Certas pessoas ou lugares'},
 mainMotivation:{A:'O controle sobre suas decisões',B:'A confiança de quem você ama',C:'Seu dinheiro e seus planos',D:'Sua saúde e sua tranquilidade'},
 desiredOutcome:{A:'Passar por momentos difíceis sem recorrer ao uso',B:'Estar mais presente para quem você ama',C:'Mais saúde e paz no dia a dia',D:'Voltar a construir seus planos para o futuro'},
};
export function summary(key:keyof typeof summaries,answers:Answers){const value=answers[key];return typeof value==='string'?summaries[key][value as keyof typeof summaries[typeof key]]??'Não informado':'Não informado';}
