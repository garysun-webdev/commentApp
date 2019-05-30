import React from "react";
import { Typography } from "@material-ui/core";

const CommentCard = ({ comment, author }) => {
  return (
    <div>
      <Typography variant="body1">{comment}</Typography>
      <Typography variant="body2">- {author}</Typography>
    </div>
  );
};

export default CommentCard;
