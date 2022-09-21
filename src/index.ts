import { fetchFile } from "@ffmpeg/ffmpeg";

await (async () => {
    await fetchFile("test");
})();