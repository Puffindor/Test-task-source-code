#!/usr/bin/env sh

set -e


npm run build

cd dist

git init
git add -A
git commit -m 'Deploy'
git push -f origin git@github.com:Puffindor/Test-task-todo-list-.git master:gh-pages

cd-