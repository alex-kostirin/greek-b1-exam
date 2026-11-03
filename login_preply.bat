@echo off
cd /d "%~dp0"
echo ==============================================
echo Zapusk brauzera dlya vhoda v Preply...
echo ==============================================
node scripts\preply_sync.mjs --login
pause
