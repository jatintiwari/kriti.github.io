npm run build;

git add ./build;
git commit -m 'build and deploy app';
git push origin master;

firebase deploy;