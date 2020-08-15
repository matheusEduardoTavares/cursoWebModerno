//Para retornar uma nova instância já que o node por padrão coloca um cache, basta usrmos 1 factory (retorna 1 novo objeto ou instância):
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}
//o module.exports possui dentro uma função factory.