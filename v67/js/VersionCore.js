
class VersionCore {
    static info = {"number": "67", "hash": "9B3EDD"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
