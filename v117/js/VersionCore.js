
class VersionCore {
    static info = {"number": "117", "hash": "BAD226"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
