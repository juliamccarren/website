
class VersionCore {
    static info = {"number": "154", "hash": "347276"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
