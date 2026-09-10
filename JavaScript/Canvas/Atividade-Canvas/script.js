const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");
contexto.lineWidth = 8;
contexto.lineCap = "round"
contexto.beginPath();
contexto.moveTo(100, 250);
contexto.lineTo(90 /*x*/, 400 /*y*/);

contexto.moveTo(120, 230);
contexto.lineTo(100 /*x*/, 250 /*y*/);
contexto.stroke();

contexto.beginPath();
contexto.moveTo(150, 250);
contexto.lineTo(160 /*x*/, 400 /*y*/);

contexto.moveTo(120, 230);
contexto.lineTo(150 /*x*/, 250 /*y*/);
contexto.stroke();

contexto.beginPath();
contexto.moveTo(120, 170);
contexto.lineTo(120 /*x*/, 230 /*y*/);
contexto.stroke();

/* Braço direito */
contexto.beginPath();
contexto.moveTo(120, 170);
contexto.lineTo(90 /*x*/, 190 /*y*/);
contexto.stroke();

contexto.beginPath();
contexto.moveTo(130, 210);
contexto.lineTo(90 /*x*/, 190 /*y*/);
contexto.stroke();


/* Braço esquerdo */
contexto.beginPath();
contexto.moveTo(150, 190);
contexto.lineTo(120 /*x*/, 170 /*y*/);
contexto.stroke();

contexto.beginPath();
contexto.moveTo(150, 190);
contexto.lineTo(180 /*x*/, 170 /*y*/);
contexto.stroke();

contexto.beginPath();
contexto.arc(120 /*x*/, 150 /*y*/, 17 /*Raio*/, 0/*ângulo*/, Math.PI /*MEDE EM RADIANO PI VALE 180°*/ *2 /*ângulo final*/);/*180 x 2 = 360 p ângulo dele é 360*/
contexto.stroke();


