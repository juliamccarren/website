
class VersionCore {
    static info = {"number": "98", "hash": "ECD4DD"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
