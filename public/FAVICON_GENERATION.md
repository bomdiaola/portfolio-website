# Generación de Favicons

Para generar los archivos PNG desde el SVG, puedes usar una de estas opciones:

## Opción 1: Online (Recomendado - Rápido)
1. Ve a: https://realfavicongenerator.net/
2. Sube el archivo `public/skull-favicon.svg`
3. Descarga el paquete completo de favicons
4. Reemplaza los archivos en `public/`

## Opción 2: Herramienta Local
Si tienes ImageMagick instalado:
```bash
# Favicon 16x16
magick convert -background none -resize 16x16 skull-favicon.svg favicon-16x16.png

# Favicon 32x32
magick convert -background none -resize 32x32 skull-favicon.svg favicon-32x32.png

# Favicon 192x192 (Android)
magick convert -background none -resize 192x192 skull-favicon.svg favicon-192x192.png

# Apple Touch Icon 180x180
magick convert -background none -resize 180x180 skull-favicon.svg apple-touch-icon.png

# Favicon.ico (contiene múltiples tamaños)
magick convert skull-favicon.svg -define icon:auto-resize=16,32,48 favicon.ico
```

## Archivos Necesarios:
- favicon.ico (16x16, 32x32, 48x48)
- favicon-16x16.png
- favicon-32x32.png
- favicon-192x192.png (para Android)
- apple-touch-icon.png (180x180 para iOS)
- skull-favicon.svg (ya creado)

## Nota:
Por ahora, he actualizado el HTML para usar el SVG directamente, que funciona en navegadores modernos.
Si necesitas mayor compatibilidad, genera los PNGs con las herramientas mencionadas.
