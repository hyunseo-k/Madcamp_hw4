import React, { useState, useEffect } from 'react';

function HtmlComponent() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('/Draw.html')
      .then((response) => response.text())
      .then((text) => setHtmlContent(text));

    const script = document.createElement('script');
    script.src = 'draw.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

export default HtmlComponent;