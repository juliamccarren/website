
class VersionCore {
    static info = {"number": "135", "hash": "B47479"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
