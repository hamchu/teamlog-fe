export const CreateComment = async (
  parentCommentIdVal,
  writerIdVal,
  postIdVal,
  contentsVal,
  commentMentionsVal,
) => {
  const comment = {
    parentCommentId: parentCommentIdVal,
    writerId: writerIdVal, // 이미 알고있어야 하는 아이디
    postId: postIdVal,
    contents: contentsVal,
    commentMentions: commentMentionsVal, // 여기에 이제 해시태그...
  };

  await fetch('http://3.15.16.150:8090/api/comments/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  }).then((res) => {
    console.log(res.status);
  });
};

export const GetComment = async (postId) => {
  const response = await fetch(
    `http://3.15.16.150:8090/api/posts/${postId}/parent-comments/`,
  ).then((res) => res.json());
  return response;
};

export const GetChildComment = async (commentId) => {
  const response = await fetch(
    `http://3.15.16.150:8090/api/comments/${commentId}/child-comments`,
  ).then((res) => res.json());
  return response;
};

export const DeleteComment = async (commentId) => {
  const status = await fetch(
    `http://3.15.16.150:8090/api/comments/${commentId}`, { method: 'DELETE' },
    ).then((res) => {
      if (res.status === 200) {
      return true;
    }
      return false;
    }); // 예외처리를 위한 틀
    return status;
};
