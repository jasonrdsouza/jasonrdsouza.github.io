#!/usr/bin/env sh

echo "Cleaning out old artifacts"
rm -rf docs
mkdir docs

echo "Generating new site"
pub run build_runner build --release --output release
cp -R release/web/ docs/
cp CNAME docs/CNAME
touch docs/.nojekyll
rm docs/packages
rm -rf release

echo "Finished generating site into docs/"
echo "Push to Github to deploy"
