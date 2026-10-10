// Embed Chart 2 with explicit error handling and container logging
const spec2 = "json/chart2.json";

vegaEmbed('#vis_chart2', spec2, { "actions": false })
  .then(result => {
    console.log("Chart 2 loaded successfully", result);
  })
  .catch(error => {
    console.error("Error loading Chart 2:", error);
    document.getElementById('vis_chart2').innerHTML = 
      `<div style="color: red; padding: 20px; border: 1px solid red; background: #fff0f0;">
         <strong>Vega-Lite Embedding Error:</strong><br>${error.message}
       </div>`;
  });