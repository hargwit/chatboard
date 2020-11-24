# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.148.1/containers/javascript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version: 14, 12, 10
ARG VARIANT="14-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# Install MongoDB command line tools
ARG MONGO_TOOLS_VERSION=4.4
RUN curl -sSL "https://www.mongodb.org/static/pgp/server-${MONGO_TOOLS_VERSION}.asc" | (OUT=$(apt-key add - 2>&1) || echo $OUT) \
    && echo "deb http://repo.mongodb.org/apt/debian $(lsb_release -cs)/mongodb-org/${MONGO_TOOLS_VERSION} main" | tee /etc/apt/sources.list.d/mongodb-org-${MONGO_TOOLS_VERSION}.list \
    && apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get install -y mongodb-org-tools mongodb-org-shell \
    && apt-get clean -y && rm -rf /var/lib/apt/lists/*

