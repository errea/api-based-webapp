const moviesAppCode = "6XTY5c5cttB49FIPrzzY";

const commentsURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${moviesAppCode}/comments`;

const createComment = async (id, username, comment) => {
  const commentBody = {
    "item_id": id,
    "username": username,
    "comment": comment
  }
  
  const results = await fetch(commentsURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commentBody),
  });
  
  const status = await results.json();
  return status;
}

const getComments = async (id) => {
  const result = await fetch(`${commentsURL}?item_id=${id}`);
  
  const comments = await result.json();
  console.log(comments.error?.status);
  if (comments.error?.status === 500 || comments.error?.status === 400) {
    return [];
  } else {
    return comments;
  }
}

export { createComment, getComments }