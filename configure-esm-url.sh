#!/usr/bin/env bash

# ESM URL input
read -p "Enter your ESM URL: (e.g http://yourschool.edu:PORT ): " esm_url

# Check user input
if [ -z "$esm_url" ]; then
    echo "No URL provided. Exiting."
    exit 1
fi

# Append include pattern to ESM URL
esm_url="${esm_url}/*"
escaped_url=$(printf '%s\n' "$esm_url" | sed 's/[\/&]/\\&/g')

# Set ESM URL
sed -i '' "s|// @include .*|// @include      ${escaped_url}|" esm-fix-max-height.js

echo "ESM URL updated."