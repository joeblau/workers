#!/bin/sh

for project in ./packages/*; do
    if [ -f "$project/wrangler.toml" ]; then
        # Install secrets
        (cd "$project" && wrangler secret:bulk < ../../rpc-secrets.json)
    fi
done