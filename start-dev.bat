@echo off
echo ==================================
echo Starting Portfolio Dev Server...
echo ==================================
echo.

cd /d "%~dp0"
echo Current directory: %CD%
echo.

"C:\Program Files\nodejs\npm.cmd" run dev

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Error starting server!
    pause
)
