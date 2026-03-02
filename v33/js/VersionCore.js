
class VersionCore {
    static info = {"number": "33", "hash": "7DAF52"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
