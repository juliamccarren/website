
class VersionCore {
    static info = {"number": "45", "hash": "5F2517"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
