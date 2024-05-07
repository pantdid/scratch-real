function uploadFile() {
  const fileInput = document.getElementById('unityFile');
  const file = fileInput.files[0];
  
  if (file) {
    const formData = new FormData();
    formData.append('unityFile', file);

    fetch('/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        const unityContainer = document.getElementById('unityContainer');
        unityContainer.innerHTML = `<iframe src="${data.filePath}" width="800" height="600"></iframe>`;
      } else {
        alert('File upload failed.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
}
