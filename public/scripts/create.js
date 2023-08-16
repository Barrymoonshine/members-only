const createPostForm = document.querySelector('.create-post-form');
const postError = document.querySelector('.post-error');

createPostForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const postValue = document.getElementById('post').value;

  const timeStamp = format(new Date(), 'MM/DD/YYYY p');
  try {
    const response = await fetch('/user/create', {
      method: 'PUT',
      body: JSON.stringify({
        post: postValue,
        created: timeStamp,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (response.ok) {
      window.location.href = data.redirect;
    } else {
      postError.textContent = data[0].msg;
    }
  } catch (err) {
    console.log(err);
  }
});
