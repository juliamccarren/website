
class VersionCore {
    static info = {"number": "101", "hash": "F44406"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
