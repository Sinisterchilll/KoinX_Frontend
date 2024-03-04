import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const containerRef = useRef();

  useEffect(() => {
    // Check if the TradingView chart has already been appended
    if (!containerRef.current.querySelector('iframe')) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "width": "980",
          "height": "610",
          "symbol": "BITSTAMP:BTCUSD",
          "interval": "W",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "2",
          "locale": "en",
          "enable_publishing": false,
          "hide_top_toolbar": true,
          "allow_symbol_change": true,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container " ref={containerRef} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
      
    </div>
  );
}

export default memo(TradingViewWidget);
