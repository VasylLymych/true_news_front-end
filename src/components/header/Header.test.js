const Obj = {
    name: "asdsa",
    getName() {
        return this.name
    }
}
Object.seal(Obj);
Obj.getFame = function f() {
    return "asdsadsdasadasdasdads"
}
console.log(Obj.getFame());