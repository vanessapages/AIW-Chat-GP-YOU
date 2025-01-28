@echo off
echo Pushing changes to GitHub...

git add .
git commit -m "Updated local changes"
git push origin main

echo Done!
pause