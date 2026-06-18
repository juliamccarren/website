
class VersionCore {
    static info = {"number": "91", "hash": "0CC0B2"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
