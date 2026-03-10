
class VersionCore {
    static info = {"number": "48", "hash": "96CF9F"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
