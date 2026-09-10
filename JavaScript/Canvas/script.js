const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");

/* Desenha uma linha */
contexto.beginPath();
contexto.moveTo(10, 0);
contexto.lineTo(50 /*x*/, 200 /*y*/);

contexto.moveTo(100, 0);
contexto.lineTo(50 /*x*/, 200 /*y*/);
contexto.stroke();

contexto.beginPath();
contexto.moveTo(100, 0);
contexto.lineTo(130 /*x*/, 200 /*y*/);

contexto.moveTo(200, 0);
contexto.lineTo(130 /*x*/, 200 /*y*/);
contexto.stroke();

/* Retângulo com preenchimento e retângulo sem preenchimento */
contexto.fillRect(80 /*x*/, 50 /*y*/, 150 /*Largura*/, 100/*Altura*/);
contexto.strokeRect(250, 50, 150, 100);

/* Círculo */
contexto.beginPath();
contexto.arc(250 /*x*/, 250 /*y*/, 50 /*Raio*/, 0/*ângulo*/, Math.PI /*MEDE EM RADIANO PI VALE 180°*/ ,true /*ângulo final*/);/*180 x 2 = 360 p ângulo dele é 360*/
contexto.stroke();