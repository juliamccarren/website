
class VersionCore {
    static info = {"number": "97", "hash": "3CCEFD"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
