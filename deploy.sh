#!/bin/env bash
# deploy.sh  minor patch  major
npm version $1 && \  
git push

