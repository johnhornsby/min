import React from 'react';

import DOMPurify from 'isomorphic-dompurify';

interface BodyText {
  richTextText?: string;
}

const BodyText = ({ richTextText }: BodyText) => {
  return (
    <>
      {richTextText && (
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(richTextText) }} />
      )}
    </>
  );
};

export default BodyText;
