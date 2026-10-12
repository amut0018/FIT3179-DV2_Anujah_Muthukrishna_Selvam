const embedOpt = { "actions": false };

// 1. File paths to Vega-Lite JSON specifications
const spec1 = "json/chart1_stream_graph.json";
const spec2 = "json/chart2_connected_dot_plot.json";
const spec3 = "json/chart3_choropleth.json";

// 2. Embed Chart 1 (Stream Graph)
vegaEmbed('#vis_chart1_stream_graph', spec1, embedOpt)
  .then(result => {
    console.log("Chart 1 loaded successfully", result);
  })
  .catch(error => {
    console.error("Error loading Chart 1:", error);
    const container = document.getElementById('vis_chart1_stream_graph');
    if (container) {
      container.innerHTML = 
        `<div style="color: red; padding: 20px; border: 1px solid red; background: #fff0f0;">
           <strong>Vega-Lite Embedding Error (Chart 1):</strong><br>${error.message}
         </div>`;
    }
  });

// 3. Embed Chart 2 (Connected Dot Plot)
vegaEmbed('#vis_chart2_connected_dot_plot', spec2, embedOpt)
  .then(result => {
    console.log("Chart 2 loaded successfully", result);
  })
  .catch(error => {
    console.error("Error loading Chart 2:", error);
    const container = document.getElementById('vis_chart2_connected_dot_plot');
    if (container) {
      container.innerHTML = 
        `<div style="color: red; padding: 20px; border: 1px solid red; background: #fff0f0;">
           <strong>Vega-Lite Embedding Error (Chart 2):</strong><br>${error.message}
         </div>`;
    }
  });

// 4. Embed Chart 3 (Choropleth Map)
vegaEmbed('#vis_chart3_choropleth', spec3, embedOpt)
  .then(result => {
    console.log("Chart 3 loaded successfully", result);
  })
  .catch(error => {
    console.error("Error loading Chart 3:", error);
    const container = document.getElementById('vis_chart3_choropleth');
    if (container) {
      container.innerHTML = 
        `<div style="color: red; padding: 20px; border: 1px solid red; background: #fff0f0;">
           <strong>Vega-Lite Embedding Error (Chart 3):</strong><br>${error.message}
         </div>`;
    }
  });