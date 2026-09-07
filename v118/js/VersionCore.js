
class VersionCore {
    static info = {"number": "118", "hash": "5A84D2"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
