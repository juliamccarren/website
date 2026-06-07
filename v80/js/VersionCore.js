
class VersionCore {
    static info = {"number": "80", "hash": "976913"};
    static get display() {
        return `CORE_V${this.info.number} [${this.info.hash}]`;
    }
}
