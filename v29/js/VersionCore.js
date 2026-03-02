
class VersionCore {
    static info = {"number": "29", "hash": "9A2C45"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
