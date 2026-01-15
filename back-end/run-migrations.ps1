param(
  [Parameter(Mandatory = $true)]
  [string]$ExternalDatabaseUrl
)

$ErrorActionPreference = "Stop"

function Write-Info($msg) { Write-Host "[migrate] $msg" -ForegroundColor Cyan }
function Write-Warn($msg) { Write-Host "[migrate] $msg" -ForegroundColor Yellow }

if (!(Test-Path "migrations/create_users_pg.sql")) {
  throw "Arquivo migrations/create_users_pg.sql não encontrado. Execute este script dentro da pasta back-end."
}

try {
  docker --version | Out-Null
} catch {
  throw "Docker não encontrado. Instale o Docker Desktop e tente novamente."
}

if ($ExternalDatabaseUrl -match "dpg-.*-postgres\.render\.com" -and $ExternalDatabaseUrl -notmatch "sslmode=") {
  Write-Warn "URL parece do Render. Se der erro de SSL, adicione '?sslmode=require' no final."
}

Write-Info "Aplicando schema (create_users_pg.sql) via container postgres:16..."

# Observação:
# - Internal Database URL do Render não resolve fora do Render.
# - Use a External Database URL aqui.
docker run --rm -it -v ${PWD}:/work -w /work postgres:16 bash -lc "psql `"$ExternalDatabaseUrl`" -f migrations/create_users_pg.sql"

Write-Info "OK."

