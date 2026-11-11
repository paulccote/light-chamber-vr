(function(root){
const TIMES=[.25,.5,1];
function measure(brightness){const recorded=TIMES.map(t=>Math.min(1,brightness*t));const estimates=recorded.map((z,i)=>z/TIMES[i]);return {brightness,times:TIMES.slice(),recorded,estimates,clipped:TIMES.map(t=>brightness*t>1),mean:estimates.reduce((a,b)=>a+b,0)/3};}
root.LightModel={measure,TIMES};if(typeof module!=='undefined')module.exports=root.LightModel;
})(typeof window==='undefined'?globalThis:window);
