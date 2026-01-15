param(
  [string]$Repo = "enascentedev/back-end-api",
  [string]$Tag = "lwg",
  [switch]$Push,
  [switch]$Run
)

$ErrorActionPreference = "Stop"

function Write-Info($msg) { Write-Host "[deploy] $msg" -ForegroundColor Cyan }
function Write-Warn($msg) { Write-Host "[deploy] $msg" -ForegroundColor Yellow }
function Assert-LastExitCode([string]$step) {
  if ($LASTEXITCODE -ne 0) {
    throw "Falha em '$step' (exit code: $LASTEXITCODE)."
  }
}

$Image = "$Repo`:$Tag"

try {
  docker --version | Out-Null
} catch {
  throw "Docker não encontrado. Instale o Docker Desktop e tente novamente."
}

Write-Info "Imagem: $Image"
Write-Info "Buildando..."
docker build -t $Image .
Assert-LastExitCode "docker build"

if ($Push) {
  Write-Info "Fazendo push..."
  docker push $Image
  if ($LASTEXITCODE -ne 0) {
    Write-Warn "Falhou ao dar push. Erro comum: falta de login/permissão no Docker Hub (ex.: insufficient_scope)."
    Write-Warn "Garanta que o Docker CLI está logado na conta certa:"
    Write-Warn "  docker logout"
    Write-Warn "  docker login -u SEU_USUARIO"
    Write-Warn "Se você NÃO tiver acesso para publicar em '$Repo', publique no seu próprio repo e ajuste o Render:"
    Write-Warn "  docker tag $Image SEUUSUARIO/back-end-api:$Tag"
    Write-Warn "  docker push SEUUSUARIO/back-end-api:$Tag"
    throw "docker push falhou."
  }
}

if ($Run) {
  Write-Info "Subindo container local na porta 3000..."
  docker run --rm -p 3000:3000 -e PORT=3000 $Image
  Assert-LastExitCode "docker run"
} else {
  Write-Info "Concluído."
  Write-Info "Se o Render estiver como 'Image', faça Manual Deploy após o push."
}

