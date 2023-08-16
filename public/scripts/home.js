const deleteButton = document.querySelector('.delete-button');

if (deleteButton === null) {
  // do nothing, user doesn't have admin permissions to delete posts
} else {
  deleteButton.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/message/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _id: e.target.dataset.doc,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        window.location.href = data.redirect;
      }
    } catch (err) {
      console.log(err);
    }
  });
}
