const embedOpt = { "actions": false };

// 1. File paths to Vega-Lite JSON specifications
const spec1 = "json/chart1_bump_chart.json";
const spec2 = "json/chart2_connected_dot_plot.json";
const spec3 = "json/chart3_choropleth.json";
const spec4 = "json/chart4_prop_symbol.json";
const spec5 = "json/chart5_bin_map.json";
const spec6 = "json/chart6_bar_chart.json";
const spec7 = "json/chart7_heatmap.json";
const spec8 = "json/chart8_stacked_bar.json";
const spec9 = "json/chart9_lollipop_chart.json";
const spec10 = "json/chart10_slope_chart.json";
const spec11 = "json/chart11_sankey_diagram.json";


// 2. Embed Chart 1 (Bump Chart)
vegaEmbed('#vis_chart1_bump_chart', spec1, embedOpt)
  .then(result => {
    console.log("Chart 1 loaded successfully", result);
  })
  .catch(error => {
    console.error("Error loading Chart 1:", error);
    const container = document.getElementById('vis_chart1_bump_chart');
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

// 5. Embed Chart 4 (Proportional Symbol Map)
vegaEmbed('#vis_chart4_prop_symbol', spec4, embedOpt)
  .then(result => {
    console.log("Chart 4 loaded successfully", result);
  })
  .catch(error => {
    console.error("Error loading Chart 4:", error);
    const container = document.getElementById('vis_chart4_prop_symbol');
    if (container) {
      container.innerHTML = 
        `<div style="color: red; padding: 20px; border: 1px solid red; background: #fff0f0;">
           <strong>Vega-Lite Embedding Error (Chart 4):</strong><br>${error.message}
         </div>`;
    }
  });

// 6. Embed Chart 5 (Bin Map)
vegaEmbed('#vis_chart5_bin_map', spec5, embedOpt)
  .then(result => {
    console.log("Chart 5 loaded successfully", result);
  })
  .catch(error => {
    console.error("Error loading Chart 5:", error);
    const container = document.getElementById('vis_chart5_bin_map');
    if (container) {
      container.innerHTML = 
        `<div style="color: red; padding: 20px; border: 1px solid red; background: #fff0f0;">
           <strong>Vega-Lite Embedding Error (Chart 5):</strong><br>${error.message}
         </div>`;
    }
  });

// 7. Embed Chart 6 (Bar Chart)
vegaEmbed('#vis_chart6_bar_chart', spec6, embedOpt)
  .then(result => {
    console.log("Chart 6 loaded successfully", result);
  })
  .catch(error => {
    console.error("Error loading Chart 6:", error);
    const container = document.getElementById('vis_chart6_bar_chart');
    if (container) {
      container.innerHTML = 
        `<div style="color: red; padding: 20px; border: 1px solid red; background: #fff0f0;">
           <strong>Vega-Lite Embedding Error (Chart 6):</strong><br>${error.message}
         </div>`;
    }
  });

// 8. Embed Chart 7 (State Drive-Time Heatmap)
vegaEmbed('#vis_chart7_heatmap', spec7, embedOpt)
  .then(result => {
    console.log("Chart 7 loaded successfully", result);
  })
  .catch(error => {
    console.error("Error loading Chart 7:", error);
    const container = document.getElementById('vis_chart7_heatmap');
    if (container) {
      container.innerHTML =
        `<div style="color: red; padding: 20px; border: 1px solid red; background: #fff0f0;">
           <strong>Vega-Lite Embedding Error (Chart 7):</strong><br>${error.message}
         </div>`;
    }
  });

// 9. Embed Chart 8 (State Indigenous Status Stacked Bar Chart)
vegaEmbed('#vis_chart8_stacked_bar', spec8, embedOpt)
  .then(result => {
    console.log("Chart 8 loaded successfully", result);
  })
  .catch(error => {
    console.error("Error loading Chart 8:", error);
    const container = document.getElementById('vis_chart8_stacked_bar');
    if (container) {
      container.innerHTML =
        `<div style="color: red; padding: 20px; border: 1px solid red; background: #fff0f0;">
           <strong>Vega-Lite Embedding Error (Chart 8):</strong><br>${error.message}
         </div>`;
    }
  });

  // 11. Embed Chart 9 (Lollipop Chart)
vegaEmbed('#vis_chart9_lollipop_chart', spec9, embedOpt)
  .then(result => {
    console.log("Chart 9 loaded successfully", result);
  })
  .catch(error => {
    console.error("Error loading Chart 9:", error);
    const container = document.getElementById('vis_chart9_lollipop_chart');
    if (container) {
      container.innerHTML =
        `<div style="color: red; padding: 20px; border: 1px solid red; background: #fff0f0;">
           <strong>Vega-Lite Embedding Error (Chart 9):</strong><br>${error.message}
         </div>`;
    }
  });

    // 12. Embed Chart 10 (Slope Chart)
vegaEmbed('#vis_chart10_slope_chart', spec10, embedOpt)
  .then(result => {
    console.log("Chart 10 loaded successfully", result);
  })
  .catch(error => {
    console.error("Error loading Chart 10:", error);
    const container = document.getElementById('vis_chart10_slope_chart');
    if (container) {
      container.innerHTML =
        `<div style="color: red; padding: 20px; border: 1px solid red; background: #fff0f0;">
           <strong>Vega-Lite Embedding Error (Chart 10):</strong><br>${error.message}
         </div>`;
    }
  });

      // 13. Embed Chart 11 (Sankey Diagram)
vegaEmbed('#vis_chart11_sankey_diagram', spec11, embedOpt)
  .then(result => {
    console.log("Chart 11 loaded successfully", result);
  })
  .catch(error => {
    console.error("Error loading Chart 11:", error);
    const container = document.getElementById('vis_chart11_sankey_diagram');
    if (container) {
      container.innerHTML =
        `<div style="color: red; padding: 20px; border: 1px solid red; background: #fff0f0;">
           <strong>Vega-Lite Embedding Error (Chart 11):</strong><br>${error.message}
         </div>`;
    }
  });