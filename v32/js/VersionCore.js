
class VersionCore {
    static info = {"number": "32", "hash": "F4C965"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
