@echo off
title NUTS - Tienda WebApp
echo ========================================================
echo        INICIANDO SERVIDOR LOCAL PARA DIETETICA NUTS
echo ========================================================
echo.
echo La tienda se abrira en tu navegador predeterminado...
echo Para detener el servidor, cerra esta ventana.
echo.
start "" "http://localhost:8080"
python -m http.server 8080
pause
