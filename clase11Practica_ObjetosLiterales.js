//la lista de clientes.
let arrayCuentas = [
    {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
    },
    {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
    },
    {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
    },
    {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
    },
    {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
    },
];
  // podes continuar tu codigo a partir de aca!

let banco = {
    clientes: arrayCuentas,
    consultarCliente: function(titular){
        for(let i = 0; i < this.clientes.length ; i++){
            if(this.clientes[i].titularCuenta === titular){
                return this.clientes[i];
            }
        }
    },
    deposito: function (titular,dinero){
            let clienteEncontrado = this.consultarCliente(titular);
            clienteEncontrado.saldoEnPesos += dinero;
            console.log(`Depósito realizado, su
            nuevo saldo es: ${clienteEncontrado.saldoEnPesos}`)
            },
    extraccion: function (titular,dinero){
                let clienteEncontrado = this.consultarCliente(titular);
                if(clienteEncontrado.saldoEnPesos >= dinero){
                    clienteEncontrado.saldoEnPesos -= dinero;
                    console.log(`Extraccion realizada, su
                    nuevo saldo es: ${clienteEncontrado.saldoEnPesos}`)
                }
                else{
                    console.log('Dinero insuficiente')
                }
            },
}


// let clienteEncontrado = banco.consultarCliente('Ramon Connell');

// console.log(clienteEncontrado);

banco.deposito('Ramon Connell',1000);

banco.extraccion('Ramon Connell',3000);
banco.extraccion('Ramon Connell',10000);