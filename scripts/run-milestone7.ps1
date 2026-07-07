<#
  Bootstraps and runs the MILESTONE 7 - Assignment dev server.

  Usage: from PowerShell run `.
un-milestone7.ps1` (when current directory is the `scripts` folder),
  or call it from the repository root as `.	ools\run-milestone7.ps1` depending on your workflow.
#>

try {
    Push-Location
    # Move to repository root
    Set-Location -Path (Join-Path -Path $PSScriptRoot -ChildPath "..")
    # Enter the project folder
    Set-Location -Path "MILESTONE 7- Assignment"

    Write-Host "Installing dependencies for MILESTONE 7..." -ForegroundColor Cyan
    npm install

    Write-Host "Starting dev server (npm run dev)..." -ForegroundColor Cyan
    npm run dev
}
finally {
    Pop-Location
}
