import * as http from 'http';
import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());
const PORT = 3000;

// Endpoint GET
app.get('/sumar', (req: Request, res: Response) => {
    const { num1, num2 } = req.query;

    if (!num1 || !num2) {
        return res.status(400).json({ error: 'Se requieren dos parámetros numéricos.' });
    }

    const resultado = Number(num1) + Number(num2);
    res.json({ resultado });
});

app.post('/calcular', (req: Request, res: Response) => {
    const operacion=req.body;
  if (operacion.operacion==="suma")
    return res.send({resultado:Number(operacion.num1)+Number(operacion.num2)});
  if (operacion.operacion==="resta")
    return res.send({resultado:Number(operacion.num1)-Number(operacion.num2)});
  if (operacion.operacion==="divide")
    return res.send({resultado:Number(operacion.num1)/Number(operacion.num2)});
  if (operacion.operacion==="multiplica")
    return res.send({resultado:Number(operacion.num1)+Number(operacion.num2)});
  
  
  res.send(operacion);
   
});


app.get('/restar', (req: Request, res: Response) => {
    const { num1, num2 } = req.query;

    if (!num1 || !num2) {
        return res.status(400).json({ error: 'Se requieren dos parámetros numéricos.' });
    }

    const resultado = Number(num1) - Number(num2);
    res.json({ resultado });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});


