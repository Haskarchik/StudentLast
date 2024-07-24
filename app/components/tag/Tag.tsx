import React, { useState } from 'react';
import './Tag.scss';
import DeleteTagButton from '../delete-tag-button/DeleteTagButton';
export interface TagProps {
  content: string;
}

export default function Tag({ content }: TagProps) {
  return (
    <div className="tag">
      <div className="content">{content}</div>
      <DeleteTagButton content={content} />
    </div>
  );
}
