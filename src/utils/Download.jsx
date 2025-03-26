/**
 * @copyrights 2025 shahrul-amin
 * @license Apache-2.0
 */

const handleDownloadCV = ({ href, download }) => {
    if (!href || !download) {
        console.error("Download failed: 'href' and 'download' are required.");
        return;
    }

    const link = document.createElement("a");
    link.href = href;
    link.download = download;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export default handleDownloadCV;
