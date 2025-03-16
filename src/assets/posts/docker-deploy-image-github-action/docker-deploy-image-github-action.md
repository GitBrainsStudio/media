# Deploy Docker Image (GitHub action)

.github -> workflows -> deploy.yml

```
name: Deploy

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

on:
  workflow_run:
    workflows: [Build]
    types:
      - completed

jobs:
  deploy:
    runs-on: ubuntu-22.04
    environment: production

    steps:
      - name: Checkout
        uses: actions/checkout@v4.1.1
        env:
          GIT_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          fetch-depth: 0

      - name: Install ssh keys
        run: |
          install -m 600 -D /dev/null ~/.ssh/id_rsa
          echo "${{ secrets.SSH_PRIVATE_KEY }}" > ~/.ssh/id_rsa
          ssh-keyscan -H ${{ secrets.SSH_HOST }} > ~/.ssh/known_hosts

      - name: Extract metadata (tags, labels) for Docker
        id: meta
        uses: docker/metadata-action@9ec57ed1fcdbf14dcef7dfbe97b2010124a938b7
        with:
          images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}

      - name: Docker compose
        env:
          IMAGE_REF: ${{ steps.meta.outputs.tags }}
        run: ssh ${{ secrets.SSH_USER }}@${{ secrets.SSH_HOST }} "echo ${{ github.token }} | docker login ghcr.io -u ${{ github.actor }} --password-stdin && cd ${{ secrets.WORK_DIR }} && docker compose pull && docker compose up -d && exit"

      - name: cleanup
        run: rm -rf ~/.ssh

```
