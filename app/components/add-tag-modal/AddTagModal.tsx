import Button from '@mui/material/Button';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Autocomplete,
  Paper
} from '@mui/material';
import React, { SyntheticEvent, useContext, useState } from 'react';
import { TagsContext } from '../tags-input/TagsContext';

interface AddTagModalProps {
  open: boolean;
  onClose: () => void;
  items: Array<string>;
  Performer:any
}

export default function AddTagModal({ open, onClose, items,Performer }: AddTagModalProps) {
  const { tags, setTags } = useContext(TagsContext);

  const defaultTag = 'Додайте';
  const [currentTag, setTag] = useState<string>(defaultTag);

  function addTag() {
    setTags([...tags, currentTag]);
    onClose();
  }

  function handleInputChange(e: SyntheticEvent, value: string) {
    setTag(value);
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ textAlign: 'center' }}>{Performer.add_tag}</DialogTitle>
      <DialogContent>
        <Autocomplete
          fullWidth
          freeSolo
          onInputChange={handleInputChange}
          options={items}
          noOptionsText={Performer.not_found}
          sx={{
            '.MuiAutocomplete-option': {
              color: 'white !important'
            }
          }}
          renderInput={(params) => (
            <TextField {...params} fullWidth label={Performer.add_tag} variant="standard" />
          )}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{Performer.cansel}</Button>
        <Button
          onClick={addTag}
          disabled={
            currentTag === '' ||
            currentTag === defaultTag ||
            Boolean(tags.find((tag) => tag === currentTag))
          }>
          {Performer.add}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
