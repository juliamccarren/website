
class VersionCore {
    static info = {"number": "111", "hash": "E57C1A"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
