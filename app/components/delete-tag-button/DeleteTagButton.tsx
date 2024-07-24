import { IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import clsx from "clsx";
import { useContext } from "react";
import { TagsContext } from "../tags-input/TagsContext";

export interface DeleteTagButtonProps {
  content: string;
}
export default function DeleteTagButton({ content }: DeleteTagButtonProps) {
  const { tags, setTags } = useContext(TagsContext);

  function handleTagDelete() {
    setTags(tags.filter((tag) => tag !== content));
  }

  return (
    <IconButton
      size="small"
      className={"delete-button"}
      sx={{ maxHeight: "20px", maxWidth: "20px" }}
      onClick={handleTagDelete}
    >
      
      <ClearIcon sx={{ maxHeight: "18px", maxWidth: "18px" }} />
    </IconButton>
  );
}
