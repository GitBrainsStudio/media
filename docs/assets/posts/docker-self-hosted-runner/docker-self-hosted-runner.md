# Self-hosted runner with ci-cd jobs

runner.yml

```
name: CI & CD

on:
  push:
    branches:
      - 'development'

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

jobs:
  ci-job:
    runs-on: self-hosted
    name: CI Job
    permissions:
      contents: read
      packages: write
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Log in to the Container registry
        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ github.token }}

      - name: Extract metadata (tags, labels) for Docker
        id: meta
        uses: docker/metadata-action@98669ae865ea3cffbcbaa878cf57c20bbf1c6c38
        with:
          images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}

      - name: Build
        uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
        with:
          context: .
          file: dockerfile
          push: true
          tags: ${{ steps.meta.outputs.tags }}
          labels: ${{ steps.meta.outputs.labels }}

  cd-job:
    runs-on: self-hosted
    name: CD Job
    permissions:
      contents: read
      packages: write
    needs: ci-job
    steps:
      - name: Login to Docker Registry
        run: echo ${{ github.token }} | docker login ghcr.io -u ${{ github.actor }} --password-stdin

      - name: Run services with latest version
        run: |
          cd ${{ secrets.WORK_DIR }}

          docker compose pull
          docker compose up -d --remove-orphans

```
