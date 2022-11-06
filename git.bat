@echo off
echo escreva seu commit.
git pull
git add .
set /p commit= escreva seu commit
echo Input is: %input%
git commit -m "%commit%"
set /p %opcao% = digite 1 para push;
if ($opcao -eq 1) {
    git push -u origin main
}
