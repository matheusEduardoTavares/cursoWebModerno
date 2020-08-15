// node faz cache 
module.exports = {
    valor: 1,
    inc() {
        this.valor++
    }
}
//Com o cache dos módulos, significa que essas instâncias são mantidas como sendo singleton, uma única instância.