@echo off
title Blake Beal Portfolio - Dev Server
color 0A

echo.
echo ========================================
echo   Blake Beal Portfolio - V2
echo ========================================
echo.

REM Check if node_modules exists
if not exist "node_modules\" (
    echo [1/2] Installing dependencies...
    call npm install
    echo.
)

echo [2/2] Starting development server...
echo.
echo    Starting Vite...
echo    Press Ctrl+C to stop
echo.

call npm run dev

pause
