import React from "react";
import { render } from "react-testing-library";
import CommentList from "../CommentList";

describe("Comment List", () => {
  test("It renders a list of comment cards with their comment and tag", () => {
    //Arrange
    const comment1 = {
      id: 1,
      comment: "I do love unit testing",
      author: "Gary Sun"
    };

    const comment2 = {
      id: 2,
      comment: "We should simulate user behaviour as much as possible",
      author: "Sylvia Luo"
    };

    const props = {
      comments: [comment1, comment2]
    };

    //Act
    const { getByText } = render(<CommentList {...props} />);

    const firstCommentNode = getByText(comment1.comment);
    const firstAuthorTagNode = getByText(`- ${comment1.author}`);
    const secondCommentNode = getByText(comment2.comment);
    const secondAuthorTagNode = getByText(`- ${comment2.author}`);

    expect(firstCommentNode).toBeDefined();
    expect(firstAuthorTagNode).toBeDefined();
    expect(secondCommentNode).toBeDefined();
    expect(secondAuthorTagNode).toBeDefined();
  });
});
