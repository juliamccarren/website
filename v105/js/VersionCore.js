
class VersionCore {
    static info = {"number": "105", "hash": "A1F41D"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
