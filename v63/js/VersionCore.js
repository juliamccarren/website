
class VersionCore {
    static info = {"number": "63", "hash": "1EFE55"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
