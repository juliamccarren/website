
class VersionCore {
    static info = {"number": "86", "hash": "17E2E9"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
