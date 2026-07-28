
class VersionCore {
    static info = {"number": "104", "hash": "CBAC66"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
