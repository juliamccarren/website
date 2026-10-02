
class VersionCore {
    static info = {"number": "145", "hash": "166BE0"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
