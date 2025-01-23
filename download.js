const url = 'https://drive.google.com/file/d/FILE_ID/view?usp=sharing';
const fileId = url.split('/d/')[1].split('/')[0];
const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
