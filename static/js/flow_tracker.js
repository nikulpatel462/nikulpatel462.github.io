const outputURL = "https://raw.githubusercontent.com/nikulpatel3141/ETF-Flows/master/output.json"
const tickerFlowDiv = document.getElementById("tickerFlows");
const sectorFlowDiv = document.getElementById("sectorFlows");
const totalFlowDiv = document.getElementById("totalFlows");
const flowDateDiv = document.getElementById("flowDate");

async function getFlowData(){
  return fetch(outputURL)
  .then(res => res.json())
}

getFlowData().then(
out => {
tickerFlowDiv.innerHTML = out["ticker"];
sectorFlowDiv.innerHTML = out["sector"];
totalFlowDiv.innerHTML = out["total"];
flowDateDiv.innerText = out["as_of_date"];
}
);

