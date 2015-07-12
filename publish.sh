#!/bin/sh

LOCAL_SITE_DIR=$HOME/src/jasonrdsouza.github.io

echo "Switching to local site directory"
cd $LOCAL_SITE_DIR

echo "Generating site"
hugo

echo "Removing DS_Store files"
find . -name "*.DS_Store" -type f -delete

#echo "Setting default bucket permissions to world-readable"
#gsutil defacl ch -u AllUsers:R gs://www.jasondsouza.org

echo "Pushing site to cloud storage"
gsutil -m rsync -d -r $LOCAL_SITE_DIR/public gs://www.jasondsouza.org
