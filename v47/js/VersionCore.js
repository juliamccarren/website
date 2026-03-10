
class VersionCore {
    static info = {"number": "47", "hash": "DE2FD5"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
