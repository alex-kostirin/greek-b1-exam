@echo off
cd /d "%~dp0"
echo ==============================================
echo Izvlechenie slov iz Preply...
echo ==============================================
node scripts\preply_sync.mjs --extract
pause
