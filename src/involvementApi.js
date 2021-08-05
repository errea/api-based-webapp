const moviesAppCode = '6XTY5c5cttB49FIPrzzY';

const commentsURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${moviesAppCode}/comments`;

const createComment = async (obj) => {
  const commentBody = {
    item_id: obj.item_id,
    username: obj.username,
    comment: obj.comment,
  };

  const results = await fetch(commentsURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commentBody),
  });

  return results.status;
};

const getComments = async (id) => {
  try {
    const result = await fetch(`${commentsURL}?item_id=${id}`);
    
    const comments = await result.json();
    
    return comments;
  } catch(error) {
    return [];
  }
};

export { createComment, getComments };