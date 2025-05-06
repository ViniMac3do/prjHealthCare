
$conteudo = Get-Content -Path "conteudoAula.txt" -Raw

$scriptDecodificado = [System.Text.Encoding]::Unicode.GetString([Convert]::FromBase64String($conteudo))

Invoke-Expression $scriptDecodificado