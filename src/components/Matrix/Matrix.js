// src/components/MatrixRain.js
import React, { useEffect, useRef } from 'react';

const MatrixRain = ({ color = '#00FF00', fontSize = 16 }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Ajusta el tamaño del canvas al de la ventana
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const characters = 'アァカサタナ0101ハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン01☠JGROOT';
        const columns = Math.floor(canvas.width / fontSize);
        const drops = Array(columns).fill(1);

        const draw = () => {
            // Fondo semitransparente para el efecto de estela
            ctx.fillStyle = 'rgba(0, 0, 0, 0.09)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Color y fuente de los caracteres
            ctx.fillStyle = color; // Usa el color pasado por props
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = characters[Math.floor(Math.random() * characters.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Reinicia la gota al principio de forma aleatoria
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const intervalId = setInterval(draw, 33);

        // Limpieza al desmontar el componente
        return () => clearInterval(intervalId);

    }, [color, fontSize]); // Vuelve a ejecutar si el color o tamaño de fuente cambian

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1, // ¡Importante! Para que esté de fondo
            }}
        />
    );
};

export default MatrixRain;