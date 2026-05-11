
class VersionCore {
    static info = {"number": "74", "hash": "2C7AF1"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
