'use client'
import { useContext, useState } from 'react';
import { TagsContext } from './TagsContext';
import './TagsInput.scss';
import AddTagButton from '../add-tag-button/AddTagButton';
import AddTagModal from '../add-tag-modal/AddTagModal';
import Tag from '../tag/Tag';

export interface TagsInputProps {
  items: Array<string>;
  titleText: string;
  emptyTagsText: string;
  Performer:any
}

export default function TagsInput({ items, titleText, emptyTagsText,Performer }: TagsInputProps) {
  const { tags, setTags } = useContext(TagsContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className="tags-input-title">{titleText}</div>
      <div className="tags-input-wrapper">
        {tags?.length === 0 ? (
          <div className="no-tags">{emptyTagsText}</div>
        ) : (
          <div className="tags-list">
            {tags?.map((tag, index) => <Tag key={index} content={tag} />)}
          </div>
        )}
        <AddTagButton onClick={openModal} />
      </div>
      <AddTagModal Performer={Performer} open={isOpen} onClose={closeModal} items={items} />
    </div>
  );
}
