# Portfolio Development Server Starter
# Double-click this file or run in PowerShell to start the server

# Ensure we're in the correct directory
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptPath

# Add Node.js to PATH for this session
$env:Path = "C:\Program Files\nodejs;$env:Path"

# Display info
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "Starting Portfolio Dev Server..." -ForegroundColor Cyan
Write-Host "Project: portfolio-website" -ForegroundColor Yellow
Write-Host "Location: $scriptPath" -ForegroundColor Yellow
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Start the development server
& "C:\Program Files\nodejs\npm.cmd" run dev

# Keep window open if there's an error
if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "Press any key to exit..." -ForegroundColor Red
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
}
