@echo off
title FRUTOS SECOS MI TIENDA - Servidor Local
chcp 65001 > nul
echo ====================================================
echo  🥜 FRUTOS SECOS MI TIENDA - WebApp Oficial
echo  Iniciando servidor local de prueba...
echo ====================================================
echo.
echo Abriendo en tu navegador: http://localhost:8081
start http://localhost:8081
python -m http.server 8081
pause
