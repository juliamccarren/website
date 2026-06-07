
class VersionCore {
    static info = {"number": "82", "hash": "3AF1CB"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
