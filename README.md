# lemorse photography portfolio

## CDN

I'm using [imgproxy](https://docs.imgproxy.net/) as CDN.

### Local usage

I've my photos stored in my `~/Pictures/lemorse-photos` local folder, this is configured in the [docker-compose manifest](./docker-compose.yaml).

You can access the images using this URL `http://localhost:8080/insecure/plain/local:///$YOUR_FILE_NAME` (cf [Serving local files documentation](https://docs.imgproxy.net/image_sources/local_files))

```bash
docker compose up -d
```

## Build

The website is automatically built in CI.

During the build, you may see the following warning:

```
WARN  found no layout file for "html" for kind "page": You should create a template file which matches Hugo Layouts Lookup Rules for this combination.
```

This occurs because Hugo attempts to generate single pages for some content, for example `/fr/publications/69/`. Since there is no corresponding template at `layouts/publications/single.html` or a fallback at `layouts/_default/single.html`, Hugo cannot render these pages.  

This warning is expected and harmless, as we do not intend to generate those pages.
