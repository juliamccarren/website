
class VersionCore {
    static info = {"number": "147", "hash": "BAEF3C"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
