import React from 'react';
import truncate from 'html-truncate';

const QuillContent = ({ content, maxLength }) => {
  const truncatedContent = truncate(content, maxLength, {
    keepImageTag: true,
    ellipsis: '...',
  });

  return (
    <div
      dangerouslySetInnerHTML={{ __html: truncatedContent }}
    />
  );
};

export default QuillContent;