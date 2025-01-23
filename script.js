// Get the file ID from the URL path
const fileId = window.location.pathname.slice(1);

if (fileId) {
    // Redirect to Google Drive's direct download link
    const driveUrl = `https://drive.google.com/uc?id=${fileId}&export=download`;
    window.location.href = driveUrl;
} else {
    console.log("No file ID provided.");
}
