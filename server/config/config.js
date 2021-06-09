//====================
//      PUERTO
//====================
process.env.PORT = process.env.PORT || 3000;

//=======================
// Vencimiento del Token
//=======================
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


//=======================
// SEED de autenticacion
//=======================
process.env.SEED = 'este-es-el-seed-desarrollo';

//=======================
// Google Client ID
//=======================
process.env.CLIENT_ID = '59888765598-qof8fq2pd9jucpru6tsm7rj9q1r6c9a2.apps.googleusercontent.com'