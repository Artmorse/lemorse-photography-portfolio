# lemorse photography portfolio

## CDN

I'm using [imgproxy](https://docs.imgproxy.net/) as CDN.

### Local usage

I've my photos stored in my `~/Pictures/lemorse-photos` local folder, this is configured in the [docker-compose manifest](./docker-compose.yaml).

You can access the images using this URL `http://localhost:8080/insecure/plain/local:///$YOUR_FILE_NAME` (cf [Serving local files documentation](https://docs.imgproxy.net/image_sources/local_files))

```bash
docker compose up -d
```
