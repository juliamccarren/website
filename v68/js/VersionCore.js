
class VersionCore {
    static info = {"number": "68", "hash": "FCDFAF"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
