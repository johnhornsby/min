import React from 'react';

import DOMPurify from 'isomorphic-dompurify';

const BodyText = ({ richTextText }) => {
  return (
    <>
      {richTextText && (
        // <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(richTextText) }} />
        <div dangerouslySetInnerHTML={{ __html: richTextText }} />
      )}
    </>
  );
};

export default BodyText;
